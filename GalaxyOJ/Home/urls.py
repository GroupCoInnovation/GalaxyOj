#!/usr/local/bin/python2.7
#coding=utf-8
#File Name: urls.py


from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^home/(?P<User_id>[0-9]+)/$', views.UserHome, name='UserHome'),
    url(r'^home/(?P<User_id>[0-9]+)/changeinfo/$', views.Changeinfo, name='Changeinfo'),
    url(r'^home/(?P<User_id>[0-9]+)/changeimg/$', views.Changeimg, name='Changeimg'),
    url(r'login/$', views.login, name='login'),
    url(r'/login_2/$', views.login_2, name='login2'),
    url(r'logout/$', views.logout, name='logout'),
]
