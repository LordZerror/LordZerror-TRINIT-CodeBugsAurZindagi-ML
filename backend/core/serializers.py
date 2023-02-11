from rest_framework import serializers
from .models import cropModel

class cropSerializers(serializers.ModelSerializer):
    class Meta:
        model = cropModel
        fields = ("id", "state", "district", "season")