from django.shortcuts import render
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import Usuario
from .permissions import IsVerified
from . import serializers
from rest_framework import permissions, mixins, status
from rest_framework import serializers, viewsets
from rest_framework.viewsets import GenericViewSet
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import UsuarioSerializer
from .serializers import CustomTokenObtainPairSerializer

# Create your views here.
# Create your views here.

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

@api_view(["GET"])
@permission_classes([permissions.IsAuthenticated, ])
def is_token_valid(request):
    '''
    EndPoint para checagem do token
    '''
    user = Usuario.objects.get(email=request.user)
    return Response({
        'usuairo': user.username,
        'email': user.email
    })

class CustomTokenObtainPairView(TokenObtainPairView):
    '''
    EndPoint sobrescrito para obtenção do token
    '''
    serializer_class = CustomTokenObtainPairSerializer

