from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import cropSerializers, ansSerializers
from .models import cropModel, ansModel
import pickle5 as pickle
import requests
import pickle5 as pickle
import numpy as np

# Create your views here.
class cropView(viewsets.ModelViewSet):
    serializer_class = cropSerializers
    queryset = cropModel.objects.all()
    

class PredictView(APIView):
    serializer_class = ansSerializers
    # queryset = ansModel.objects.all()

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print('ans')
            # Load the trained model
            with open("../model.pkl", "rb") as f:
                model = pickle.load(f)
            
                # Make the prediction
                ans = model.predict((np.array([[90,40,40,20,80,7,200]])))[0]
            
                return Response({"crop": ans}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request):
        queryset = ansModel.objects.all()
        serializer = ansSerializers(queryset, many = True)
        return Response(serializer.data)