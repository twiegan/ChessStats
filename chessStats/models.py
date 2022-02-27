from django.db import models

# Create your models here.


class Player(models.Model):
    player_id = models.CharField(
        max_length=15,
        blank=False,
        primary_key=True,
        default='')
    title = models.CharField(
        max_length=2,
        blank=False,
        default='')
