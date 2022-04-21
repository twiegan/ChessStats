from tkinter import E
from django.db import models

# Create your models here.


class Player(models.Model):
    player_id = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True,
        default='')
    title = models.CharField(
        max_length=3,
        blank=True,
        default='')

class Opening(models.Model):
    opening_id = models.CharField(
        max_length=45,
        blank=False,
        primary_key=True,
        default='')
    name = models.CharField(
        max_length=45,
        blank=False,
        default='')

class Test(models.Model):
    Shravan = models.IntegerField(
        primary_key=True,
        default=0
    )
