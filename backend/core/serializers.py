from rest_framework import serializers
from .models import cropModel, ansModel

class cropSerializers(serializers.ModelSerializer):
    class Meta:
        model = cropModel
        fields = ("id", "state", "district", "season")
        

class ansSerializers(serializers.ModelSerializer):
    class Meta:
        model = ansModel
        fields = ("id", "crop")