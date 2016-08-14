#coding=utf-8
from __future__ import unicode_literals
from django.utils.encoding import python_2_unicode_compatible

from django.db import models

# Create your models here.

@python_2_unicode_compatible
class Information_title(models.Model):
    title = models.CharField(max_length=100)
    date = models.CharField('publish_data',max_length=50)
    author = models.CharField(max_length=50)
    changedate = models.CharField('change_data',max_length=50)
    
    def __str__(self):
        return self.title

@python_2_unicode_compatible
class Information_data(models.Model):
    data = models.TextField()

    def __str__(self):
        return str(self.id)


