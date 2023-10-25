from rest_framework.views import APIView
from rest_framework.response import Response
from . predict import *


class home(APIView):
    def post(self, request):
        result = modelPredict.dataProcess(request)
        return Response(result)
        