from rest_framework import serializers
from chessStats.models import Player

from chessStats.models import Test


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('player_id', 'title')

class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('Shravan', )
