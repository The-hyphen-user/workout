
from django.db import models

# Create your models here.


class Log(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True)
    activity = models.CharField(max_length=100)
    minutes = models.IntegerField()
    notes = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)