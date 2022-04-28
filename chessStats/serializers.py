from rest_framework import serializers
from chessStats.models import Player
from chessStats.models import Opening
from chessStats.models import Event
from chessStats.models import Date
from chessStats.models import Match

from chessStats.models import Test


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        fields = ('player_id', 'title', 'elo')

class OpeningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Opening
        fields = ('opening_id', 'name')


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ('event_id', 'name')

class DateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Date
        fields = ('date_utc', 'time_utc', 'weekday', 'date_id')


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ('date_id', 'turns', 'termination', 'winner', 'black_id', 'white_id', 'opening_id', 'event_id', 'time_control', 'match_id')
class TestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Test
        fields = ('Shravan', )
