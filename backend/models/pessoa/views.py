from rest_framework import viewsets
from .serializers import PessoaSerializer
from .models import Pessoa

# Create your views here.


class PessoaView(viewsets.ModelViewSet):
    serializer_class = PessoaSerializer
    queryset = Pessoa.objects.all()
