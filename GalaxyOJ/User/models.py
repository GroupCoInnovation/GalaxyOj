#coding=utf-8
from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.

@python_2_unicode_compatible
class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=30)
    email = models.CharField(max_length=100)
    department = models.CharField(max_length=30, null=True, blank=True )
    description = models.TextField(max_length=80, null=True, blank=True )
    imgsrc = models.CharField(max_length=100, null=True, blank=True )
    root = models.IntegerField()
    number = models.IntegerField()
    contribution = models.IntegerField()
    point = models.IntegerField()

    def __str__(self):
        return self.username
