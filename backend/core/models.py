from django.db import models

# Create your models here.
class cropModel(models.Model):
    state = models.TextField()
    district = models.TextField()
    season = models.TextField()
    
class ansModel(models.Model):
    crop = models.TextField()