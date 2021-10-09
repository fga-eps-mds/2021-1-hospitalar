from rest_framework import viewsets
from .models import Avaliacao
from .serializers import AvaliacaoSerializer

# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()
