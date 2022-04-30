from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status

import os
import hashlib

from chessStats.models import Player
from chessStats.serializers import PlayerSerializer

from chessStats.models import Test
from chessStats.serializers import TestSerializer

from chessStats.models import User

# Create your views here.

@csrf_exempt
def user_login(request):
    if request.method != 'POST':
        return HttpResponseBadRequest
    user_request = JSONParser().parse(request)
    print('User: ' + user_request['user_id'] + '\nPass: ' + user_request['password'])
    userSearch = User.objects.filter(user_id=user_request['user_id'])
    if not userSearch.exists():
        return JsonResponse({'Auth': 'False'})
    account = userSearch[0]
    passHash = hashlib.pbkdf2_hmac('sha256', user_request['password'].encode(), bytearray.fromhex(account.salt), 10000)
    if passHash.hex() == account.passwordHash:
        return JsonResponse({'Auth': 'True', 'User': account.user_id})
    return JsonResponse({'Auth': 'False'})
    """
    temp = userSearch[0]
    temp.salt = tempsalt.hex()
    temp.passwordHash = digest.hex()
    temp.save()
    """

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
def test_list(request):
    if request.method == 'GET':
        shravan = Test.objects.all()
        shravan_serializer = TestSerializer(shravan, many=True)
        return JsonResponse(shravan_serializer.data, safe=False)


