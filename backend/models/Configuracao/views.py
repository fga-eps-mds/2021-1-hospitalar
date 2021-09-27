from rest_framework import viewsets
from .models import Configuracao
from .serializers import ConfiguracaoSerializer

# Create your views here.


class ConfiguracaoView(viewsets.ModelViewSet):

    serializer_class = ConfiguracaoSerializer
    queryset = Configuracao.objects.all()
