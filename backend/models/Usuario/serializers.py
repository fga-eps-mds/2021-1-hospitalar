from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'nome', 'funcao', 'organizacao', 'admin')


class RegistroSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'nome', 'funcao', 'organizacao', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        email = validated_data['email']
        nome = validated_data['nome']
        funcao = validated_data['funcao']
        organizacao = validated_data['organizacao']
        password = validated_data['password']

        user = User.objects.create_user(email,
                                        nome,
                                        funcao,
                                        organizacao,
                                        password)

        return user


class RegistroAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'nome', 'funcao', 'organizacao', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        email = validated_data['email']
        nome = validated_data['nome']
        funcao = validated_data['funcao']
        organizacao = validated_data['organizacao']
        password = validated_data['password']

        user = User.objects.create_superuser(email,
                                             nome,
                                             funcao,
                                             organizacao,
                                             password)

        return user


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active:
            return user

        raise serializers.ValidationError('Incorrect credentials')
