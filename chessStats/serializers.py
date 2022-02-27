from rest_framework import serializers
from chessStats.models import Player


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('player_id', 'title')
