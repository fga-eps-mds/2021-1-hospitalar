from io import BytesIO

from django.http import HttpResponse
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import *

from .models import Avaliacao
from .relatorio.printing import MyPrint
from .serializers import AvaliacaoSerializer

# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()

    @action(methods=['get'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="#HAG_2021.pdf"'

        # buffer armazena os bytes para o PDF (PDF é arquivo compilável)
        buffer = BytesIO()

        # exemplo para a avaliação cadastrada com código #HAG_2021
        try:
            getAval2 = Avaliacao.objects.get(codigo="#HAG_2021")
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        # Utilizando o construtor para o Relatório
        # buffer, Formato e Código da Aval.
        report = MyPrint(buffer, 'A4', getAval2.codigo)

        # Função que retorna o PDF utilizando o valor do buffer
        pdf = report.printReport()

        # Armazenando o PDF na resposta do servidor
        response.write(pdf)

        return response

    @action(methods=['get'], detail=True)
    def teste(self, request, pk):
        try:
            avaliacao = Avaliacao.objects.get(id=pk)
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        avaliacaoJSON = AvaliacaoSerializer(avaliacao).data

        secoes = avaliacaoJSON['secoes']

        soma = 0
        for secao in secoes:
            for subtopico in secao['subtopicos']:
                soma += subtopico['pontuacao']

        return Response(soma)
