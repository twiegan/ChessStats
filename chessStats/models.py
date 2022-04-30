# from tkinter import E
from calendar import weekday
from datetime import date
from nis import match
from re import M
from django.db import models

# Create your models here.


class Player(models.Model):
    player_id = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True,
        default=''
    )
    title = models.CharField(
        max_length=3,
        blank=True,
        default=''
    )
    elo = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    games_played = models.IntegerField(
        max_length=5,
        blank=False,
        default=0
    )
    games_won = models.IntegerField(
        max_length=5,
        blank=False,
        default=0
    )


class Opening(models.Model):
    opening_id = models.IntegerField(
        max_length=11,
        blank=False,
        primary_key=True,
        default=0
    )
    name = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )


class Event(models.Model):
    event_id = models.IntegerField(
        max_length=11,
        blank=False,
        default=0
    )
    name = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True,
        default=''
    )


class Date(models.Model):
    date_utc = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True
    )
    time_utc = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True
    )
    weekday = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True
    )
    date_id = models.IntegerField(
        max_length=11,
        blank=True
    )


class Match(models.Model):
    match_id = models.IntegerField(
        max_length=11,
        blank=False,
        primary_key=True
    )
    date_id = models.IntegerField(
        max_length=11,
        blank=False,
    )
    turns = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    termination = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    winner = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    black_id = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    white_id = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )
    opening_id = models.IntegerField(
        max_length=11,
        blank=False
    )
    event_id = models.IntegerField(
        max_length=11,
        blank=False
    )
    time_control = models.CharField(
        max_length=45,
        blank=False,
        default=''
    )


class Test(models.Model):
    Shravan = models.IntegerField(
        primary_key=True,
        default=0
    )
