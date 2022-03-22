from django.urls import re_path
# from django.conf.urls import url
from chessStats import views

urlpatterns = [
  re_path(r'^players/$', views.player_list),
  re_path(r'^players/(?P<player_id>.*)$', views.player_detail),
  re_path(r'^test/$', views.test_list)
]