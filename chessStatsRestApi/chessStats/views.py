from django.shortcuts import render
from django.http import HttpResponse
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework import status

from chessStats.models import Player
from chessStats.serializers import PlayerSerializer

# Create your views here.

@csrf_exempt
def player_list(request):
  if request.method == 'GET':
    players = Player.objects.all()
    players_serializer = PlayerSerializer(players, many=True)
    return JsonResponse(players_serializer.data, safe=False)
