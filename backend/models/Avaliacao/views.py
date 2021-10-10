from rest_framework import viewsets
from .models import Avaliacao
from .serializers import AvaliacaoSerializer

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse


from django.core.files.storage import default_storage

# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()

@csrf_exempt
def avaliacaoApi(request,id=0):
    if request.method=='GET':
        avaliacaos = Avaliacaos.objects.all()
        avaliacaos = Avaliacaos.objects.all()
        avaliacaos_serializer=AvaliacaoSerializer(avaliacaos,many=True)
        return JsonResponse(avaliacaos_serializer.data,safe=False)

