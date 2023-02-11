from django.shortcuts import render
from rest_framework import viewsets
from .serializers import cropSerializers
from .models import cropModel

# Create your views here.
class cropView(viewsets.ModelViewSet):
    serializer_class = cropSerializers
    queryset = cropModel.objects.all()
