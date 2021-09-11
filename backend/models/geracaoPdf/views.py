from rest_framework import viewsets

from .models import GeracaoPdf
from .serializers import GeracaoPdfSerializer

# Create your views here.


class GeracaoPdfView(viewsets.ModelViewSet):

    serializer_class = GeracaoPdfSerializer
    queryset = GeracaoPdf.objects.all()
