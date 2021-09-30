from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.decorators import action
from django.http import HttpResponse
from reportlab.pdfgen import canvas
from .models import Avaliacao
from ..Secao.models import Secao
from .serializers import AvaliacaoSerializer
from io import BytesIO
from .relatorio.printing import MyPrint

# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()
    lookup_field = 'codigo'

    @action(methods=['get'], detail=False)
    def generatePDF(buffer, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # buffer armazena os bytes para o PDF (PDF é arquivo compilável)
        buffer = BytesIO()

        # exemplo para a primeira avaliação cadastrada
        getAval1 = Avaliacao.objects.get(id=1)

        # Utilizando o construtor para o Relatório
        # buffer, Formato e Código da Aval.
        report = MyPrint(buffer, 'A4', getAval1.codigo)

        # Função que retorna o PDF utilizando o valor do buffer
        pdf = report.printReport()

        # Armazenando o PDF na resposta do servidor
        response.write(pdf)

        return response
