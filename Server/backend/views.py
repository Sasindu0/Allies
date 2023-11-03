from rest_framework.views import APIView
from rest_framework.response import Response
from . predict import *


class home(APIView):
    def post(self, request):

        data = request.data
        try:
            if data['amt'] == '' or data['amt'] == '' or data['trans_hour'] == '' or data['category'] == '' or data['genderMale'] == '' or data['age'] == '' or data['genderMale'] == '':
                result = 'Invalid Input!'
                return Response(result)
            else:
                result = modelPredict.dataProcess(request)
                return Response(result)
        except:
            result = 'Invalid Input!'
            return Response(result)


        