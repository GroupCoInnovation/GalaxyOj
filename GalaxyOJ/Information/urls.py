#!/usr/local/bin/python2.7
#coding=utf-8
#File Name: urls.py
#Author: XG_W
#E-Mail: 359173080@qq.com 
#Created Time: 一  5/30 19:34:19 2016

from django.conf.urls import url

from . import views

urlpatterns = [
        url(r'^(?P<Information_id>[0-9]+)/$',views.Information,name='information'),
        url(r'^essayList/(?P<EssayList_page>[0-9]+)/$',views.EssayList,name="EssayList"),
        #url(r'^(?P<Information_id>[0-9]+)/$', views.Information, name='information'),
        # url(r'^home/(?P<User_id>[0-9]+)/$', views.UserHome, name='UserHome'),
        url(r'edit/$', views.edit, name='edit01'),
        url(r'store/$', views.store, name='edit'),
]
