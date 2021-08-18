from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer

# Create your views here.


class TodoView(viewsets.ModelViewSet):

    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

    @action(methods=['get'], detail=False)
    def get_completed(self, request):
        todos = Todo.objects.filter(completed=True)

        serializer = self.get_serializer(todos, many=True)

        return Response(serializer.data)

    @action(methods=['put'], detail=True)
    def complete(self, request, pk=None):
        todo = self.get_object()
        serializer = self.get_serializer(
            todo, data={"completed": True}, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
