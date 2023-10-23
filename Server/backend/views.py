from django.shortcuts import render
from rest_framework.views import APIView
""" from . models import * """
""" from . serializer import * """
from rest_framework.response import Response
from django.http import HttpResponse

from . predict import *

# Create your views here.

class home(APIView):
    def post(self, request):
        
        result = modelPredict.dataProcess(request)

        #print(type(result))

        return Response(result)
        