from multiprocessing import managers
from pstats import Stats
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status
import json
from django.db import connection
from django.db.models import Max

import os
import hashlib

from chessStats.models import Player
from chessStats.serializers import PlayerSerializer
from chessStats.models import Opening
from chessStats.serializers import OpeningSerializer
from chessStats.models import Event
from chessStats.serializers import EventSerializer
from chessStats.models import Date
from chessStats.serializers import DateSerializer
from chessStats.models import Match
from chessStats.serializers import MatchSerializer
from chessStats.models import Follows
from chessStats.serializers import FollowsSerializer

from chessStats.models import Test
from chessStats.serializers import TestSerializer

from chessStats.models import User

# Create your views here.


@csrf_exempt
def user_register(request):
    if request.method != 'POST':
        return HttpResponseBadRequest
    user_request = JSONParser().parse(request)
    print('User: ' + user_request['user_id'] + '\nPass: ' + user_request['password'])
    userCheck = User.objects.filter(user_id=user_request['user_id'])
    if userCheck.exists():
        return JsonResponse({'Success': 'False'})
    newSalt = os.urandom(32)
    passHash = hashlib.pbkdf2_hmac('sha256', user_request['password'].encode(), newSalt, 10000)
    newUser = User(user_id=user_request['user_id'], salt=newSalt.hex(), passwordHash=passHash.hex())
    newUser.save()
    return JsonResponse({'Success': 'True'})

@csrf_exempt
def user_login(request):
    if request.method != 'POST':
        return HttpResponseBadRequest
    user_request = JSONParser().parse(request)
    print('User: ' + user_request['user_id'] +
          '\nPass: ' + user_request['password'])
    userSearch = User.objects.filter(user_id=user_request['user_id'])
    if not userSearch.exists():
        return JsonResponse({'Auth': 'False'})
    account = userSearch[0]
    passHash = hashlib.pbkdf2_hmac('sha256', user_request['password'].encode(
    ), bytearray.fromhex(account.salt), 10000)
    if passHash.hex() == account.passwordHash:
        return JsonResponse({'Auth': 'True', 'User': account.user_id})
    return JsonResponse({'Auth': 'False'})


@csrf_exempt
def player_list(request):
    if request.method == 'GET':
        players = Player.objects.all()
        players_serializer = PlayerSerializer(players, many=True)
        return JsonResponse(players_serializer.data, safe=False)
    elif request.method == 'POST':
        player_data = JSONParser().parse(request)
        player_serializer = PlayerSerializer(data=player_data)
        if player_serializer.is_valid():
            player_serializer.save()
            return JsonResponse(player_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(player_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def player_detail(request, player_id):
    if request.method == 'GET':
        try:
            player = Player.objects.get(pk=player_id)
            player_serializer = PlayerSerializer(player)
            return JsonResponse(player_serializer.data)
        except Player.DoesNotExist:
            return JsonResponse({'message': 'The player does not exist'}, status=status.HTTP_404_NOT_FOUND)


@csrf_exempt
def opening_list(request):
    print("trying to call opening_list")
    if request.method == 'GET':
        openings = Opening.objects.all()
        opening_serializer = OpeningSerializer(openings, many=True)
        return JsonResponse(opening_serializer.data, safe=False)
    elif request.method == 'POST':
        opening_data = JSONParser().parse(request)
        opening_serializer = OpeningSerializer(data=opening_data)
        if opening_serializer.is_valid():
            opening_serializer.save()
            return JsonResponse(opening_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(opening_serializer.data, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def event_list(request):
    if request.method == 'GET':
        events = Event.objects.all()
        event_serializer = EventSerializer(events, many=True)
        return JsonResponse(event_serializer.data, safe=False)
    elif request.method == 'POST':
        event_data = JSONParser().parse(request)
        event_serializer = EventSerializer(data=event_data)
        if event_serializer.is_valid():
            event_serializer.save()
            return JsonResponse(event_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(event_serializer.data, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def date_list(request):
    if request.method == 'GET':
        dates = Date.objects.all()
        date_serializer = DateSerializer(dates, many=True)
        return JsonResponse(date_serializer.data, safe=False)
    elif request.method == 'POST':
        date_data = JSONParser().parse(request)
        date_serializer = DateSerializer(data=date_data)
        if date_serializer.is_valid():
            date_serializer.save()
            return JsonResponse(date_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(date_serializer.data, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def match_list(request):
    if request.method == 'GET':
        matches = Match.objects.all()
        match_serializer = MatchSerializer(matches, many=True)
        return JsonResponse(match_serializer.data, safe=False)

    elif request.method == 'POST':
        matchToPost = json.loads(request.body)

        white_player = None
        black_player = None
        event = None
        opening = None
        date = None

        try:
            white_player = Player.objects.get(pk=matchToPost['white_id'])
        except Player.DoesNotExist:
            return JsonResponse({'message': 'The white player does not exist'}, status=status.HTTP_404_NOT_FOUND)
        try:
            black_player = Player.objects.get(pk=matchToPost['black_id'])
        except Player.DoesNotExist:
            return JsonResponse({'message': 'The black player does not exist'}, status=status.HTTP_404_NOT_FOUND)
        try:
            event = Event.objects.get(pk=matchToPost['event'])
        except Event.DoesNotExist:
            event_serializer = EventSerializer(
                data={'name': matchToPost['event'], 'event_id': Event.objects.aggregate(Max('event_id'))['event_id__max'] + 10})
            if event_serializer.is_valid():
                event = event_serializer.save()
            else:
                print(event_serializer.errors, flush=True)
                return JsonResponse(event_serializer.data, status=status.HTTP_400_BAD_REQUEST)
        try:
            opening = Opening.objects.get(pk=matchToPost['opening'])
        except Opening.DoesNotExist:
            opening_serializer = OpeningSerializer(
                data={'name': matchToPost['opening'], 'opening_id': Opening.objects.aggregate(Max('opening_id'))['opening_id__max'] + 10})
            if opening_serializer.is_valid():
                opening = opening_serializer.save()
            else:
                print(opening_serializer.errors, flush=True)
                return JsonResponse(opening_serializer.data, status=status.HTTP_400_BAD_REQUEST)
        try:
            date = Date.objects.get(
                date_utc=matchToPost['date']['date_utc'], time_utc=matchToPost['date']['time_utc'], weekday=matchToPost['date']['weekday'])
        except Date.DoesNotExist:
            date_serializer = DateSerializer(
                data={'date_utc': matchToPost['date']['date_utc'], 'time_utc': matchToPost['date']['time_utc'], 'weekday': matchToPost['date']['weekday'], 'date_id': Date.objects.aggregate(Max('date_id'))['date_id__max'] + 10})
            if date_serializer.is_valid():
                date = date_serializer.save()
                print("saving newly created date id: ",
                      date.date_id, flush=True)
            else:
                print(date_serializer.errors, flush=True)
                return JsonResponse(date_serializer.data, status=status.HTTP_400_BAD_REQUEST)

        match = {'date_id': date.date_id, 'turns': matchToPost['turns'], 'termination': matchToPost['termination'], 'winner': matchToPost['winner'], 'black_id': black_player.player_id,
                 'white_id': white_player.player_id, 'opening_id': opening.opening_id, 'event_id': event.event_id, 'time_control': matchToPost['time_control']}
        print(match, flush=True)

        if black_player.player_id == matchToPost['winner']:
            black_player.games_won += 1
        elif white_player.player_id == matchToPost['winner']:
            white_player.games_won += 1

        black_player.games_played += 1
        white_player.games_played += 1
        black_player.save()
        white_player.save()

        match_serializer = MatchSerializer(data=match)
        if match_serializer.is_valid():
            match = match_serializer.save()
        else:
            print(match_serializer.errors, flush=True)
            return JsonResponse(match_serializer.data, status=status.HTTP_400_BAD_REQUEST)

    return JsonResponse(match_serializer.data, status=status.HTTP_201_CREATED)


@csrf_exempt
def searchByPlayerId(request, player_id):
    if request.method == 'GET':
        with connection.cursor() as cursor:
            cursor.callproc("searchByPlayerId", {player_id})

            columns = [col[0] for col in cursor.description]
            ret = [
                dict(zip(columns, row))
                for row in cursor.fetchall()
            ]
            print(ret, flush=True)
            return JsonResponse(ret, safe=False)


@csrf_exempt
def getFollowedPlayers(request, user_id):
    if request.method == 'GET':
        with connection.cursor() as cursor:
            cursor.callproc("get_followed_players", {user_id})

            columns = [col[0] for col in cursor.description]
            ret = [
                dict(zip(columns, row))
                for row in cursor.fetchall()
            ]
            print(ret, flush=True)
            responses = {}
            for player_id in ret:
                cursor.callproc("searchByPlayerId", {player_id['player_id']})
                columns2 = [col[0] for col in cursor.description]
                ret2 = [
                    dict(zip(columns2, row))
                    for row in cursor.fetchall()
                ]
                responses[player_id['player_id']] = ret2
            return JsonResponse(responses, safe=False)


@csrf_exempt
def followsPlayer(request):
    if request.method == 'POST':
        print('trying to follow player', request.body, flush=True)
        follow_data = JSONParser().parse(request)
        follow_serializer = FollowsSerializer(data=follow_data)
        if follow_serializer.is_valid():
            follow_serializer.save()
            return JsonResponse(follow_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(follow_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return JsonResponse(follow_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def getTopPlayers(request):
    if request.method == 'GET':
        with connection.cursor() as cursor:
            cursor.callproc("get_players_by_elo")

            columns = [col[0] for col in cursor.description]
            ret = [
                dict(zip(columns, row))
                for row in cursor.fetchall()
            ]
            print(ret, flush=True)
            return JsonResponse(ret, safe=False)

@csrf_exempt
def test_list(request):
    if request.method == 'GET':
        shravan = Test.objects.all()
        shravan_serializer = TestSerializer(shravan, many=True)
        return JsonResponse(shravan_serializer.data, safe=False)
