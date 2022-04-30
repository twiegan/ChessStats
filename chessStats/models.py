from django.db import models
from django_prepared_query import PreparedManager

# Create your models here.
class User(models.Model):
    user_id = models.CharField(
        max_length=16,
        blank=False,
        unique=True,
        primary_key=True)
    salt = models.CharField(
        max_length=64,
        blank=False
    )
    passwordHash = models.CharField(
        max_length=64,
        blank=False)


class Player(models.Model):
    player_id = models.CharField(
        max_length=15,
        blank=False,
        primary_key=True,
        default='')
    title = models.CharField(
        max_length=2,
        blank=True,
        default='')

class Test(models.Model):
    Shravan = models.IntegerField(
        primary_key=True,
        default=0
    )
