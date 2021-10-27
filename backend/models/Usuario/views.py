from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import LoginSerializer, UsuarioSerializer, RegistroSerializer, RegistroAdminSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class RegistrarView(generics.GenericAPIView):
    serializer_class = RegistroSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        userJSON = UsuarioSerializer(
            user,
            context=self.get_serializer_context()
        )

        return Response(userJSON.data)


class RegistrarAdminView(generics.GenericAPIView):
    serializer_class = RegistroAdminSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        userJSON = UsuarioSerializer(
            user,
            context=self.get_serializer_context()
        )

        return Response(userJSON.data)


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)

        user = serializer.validated_data

        userJSON = UsuarioSerializer(
            user,
            context=self.get_serializer_context()
        )

        #token = AuthToken.objects.create(user)[1]

        return Response({
            'user': userJSON.data,
            # 'token': token
        })


class UsuarioView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UsuarioSerializer

    def get_object(self):
        return self.request.user


class UsuarioListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UsuarioSerializer
    queryset = User.objects.all()


class UsuarioDetailView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = UsuarioSerializer
    queryset = User.objects.all()
