from django.urls import re_path
# from django.conf.urls import url
from chessStats import views

urlpatterns = [
  re_path(r'^players/$', views.player_list),
  re_path(r'^players/(?P<player_id>.*)$', views.player_detail),
  re_path(r'^openings/$', views.opening_list),
  re_path(r'^events/$', views.event_list),
  re_path(r'^dates/$', views.date_list),
  re_path(r'^matches/$', views.match_list),
  re_path(r'^test/$', views.test_list)
]