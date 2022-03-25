from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def prueba(request):
    infoPrueba = {
        'key1':'value1',
        'key2':'value2',
        'key3':'value2',
    }
    return Response(infoPrueba)