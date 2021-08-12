from cgitb import lookup
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.


class TodoView(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    @action(detail=False)
    def get_teste_1(self, request):
        recent_users = Todo.objects.all().get(title='teste 1')

        serializer = self.get_serializer(recent_users)

        return Response(serializer.data)
