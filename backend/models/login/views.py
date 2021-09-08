from rest_framework import viewsets

from .models import User
from .serializers import UserSerializer

# Create your views here.


class UserView(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all()
