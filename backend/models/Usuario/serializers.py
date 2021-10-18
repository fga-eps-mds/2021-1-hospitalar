from rest_framework import serializers
from .models import Usuario
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('id' , 'username' , 'email' , 'password' , 'tipo' , 'funcao' , 'organizacao')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = Usuario.objects.create_user(**validated_data)
        return user
        

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super(CustomTokenObtainPairSerializer, self).validate(attrs) 
        data.update({'username': self.user.username})
        data.update({'email': self.user.email})
        data.update({'organizacao': self.user.organizacao})

        return data