from multiprocessing import managers
from pstats import Stats
from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status

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

from chessStats.models import Test
from chessStats.serializers import TestSerializer


# Create your views here.


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
        print("Trying to call player_detail function")
        try:
            player = Player.objects.get(pk = player_id)
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
    print("trying to call event_list")
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
    print("inside of match_list trying to get or post")
    print(request.body)
    if request.method == 'POST':
        print("trying to post a match")
        try:
            player = Player.objects.get()
        except Exception as e:
            print(e)
    
    return JsonResponse({"hh": "player"})



@csrf_exempt
def test_list(request):
    if request.method == 'GET':
        shravan = Test.objects.all()
        shravan_serializer = TestSerializer(shravan, many=True)
        return JsonResponse(shravan_serializer.data, safe=False)


