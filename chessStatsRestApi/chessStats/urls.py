from django.urls import re_path
# from django.conf.urls import url
from chessStats import views

urlpatterns = [
  re_path(r'^players/$', views.player_list),
]