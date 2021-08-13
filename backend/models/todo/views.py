from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.


class TodoView(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    @action(detail=False)
    def get_completed(self, request):
        todos = Todo.objects.filter(completed=True)

        serializer = self.get_serializer(todos, many=True)

        return Response(serializer.data)
