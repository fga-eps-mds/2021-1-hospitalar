from django.shortcuts import render
from django.http import HttpResponse
from .models import GraficoRelatorio
from .serializers import GraficoRelatorioSerializer
from django.views.generic import View
   
from rest_framework import views, viewsets
from rest_framework.response import Response

# Create your views here.
class GraficoRelatorioView(viewsets.ModelViewSet):
    
    serializer_class = GraficoRelatorioSerializer
    queryset = GraficoRelatorio.objects.all()

    authentication_classes = []
    permission_classes = []

    def get(self, request, format=None):
        labels = [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ]
        chart_label = 'Teste"'
        chart_data = [0, 10, 5, 2, 20, 30, 45]

        data = {
            'labels': labels,
            'chartLabel': chart_label,
            'chartData': chart_data,
        }

        return Response(data)
