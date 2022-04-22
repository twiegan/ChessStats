# from tkinter import E
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

class Test(models.Model):
    Shravan = models.IntegerField(
        primary_key=True,
        default=0
    )
