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
    def get_completed(self, request):
        todos = Todo.objects.filter(completed=True)

        serializer = self.get_serializer(todos, many=True)

        return Response(serializer.data)
