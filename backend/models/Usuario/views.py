from django.http import request, response
from rest_framework import serializers, viewsets
from rest_framework.decorators import permission_classes
from .models import Usuario
from django.shortcuts import render , HttpResponse
from .serializers import UsuarioSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate


# Create your views here

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

    def usuarios_list(request):

        if request.method == 'GET':
            usuario = Usuario.objects.all()
            serializer = UsuarioSerializer(usuario, many=True)
            return JsonResponse(serializer.data, safe=False)
        elif request.method == 'POST':
            data = JSONParser().parse(request)
            serializer = UsuarioSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, safe=False)


from rest_framework.views import APIView
from rest_framework.response import Response

class LoginView(APIView):
    permission_classes = [AllowAny]
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()


    def post(self , request , format=None):
        user = authenticate(username=request.data['email'], password=request.data['password'])
        if user is not None:
            return Response({'nome': user.nome})

    @classmethod
    def get_extra_actions(cls):
        return []





