from .serializers import AvaliacaoSerializer
from .relatorio.printing import MyPrint
from .models import Avaliacao
from rest_framework.status import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import get_object_or_404
from rest_framework.decorators import action
from rest_framework import viewsets
from django.http import HttpResponse
from matplotlib import pyplot as plt
from io import BytesIO

import matplotlib
matplotlib.use('Agg')


# Create your views here.

# Create your views here.


class AvaliacaoView(viewsets.ModelViewSet):

    permission_classes = (IsAuthenticated,)

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()

    @action(methods=['post'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="#HAG_2021.pdf"'

        # buffer armazena os bytes para o PDF (PDF é arquivo compilável)
        buffer = BytesIO()

        # exemplo para a avaliação cadastrada com código fgvgrad
        try:
            getAval2 = Avaliacao.objects.get(codigo=request.data['codigo'])
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
    def geraGrafico(self, request, pk):
        try:
            obj_avaliacao = Avaliacao.objects.get(id=pk)
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        avaliacao_json = self.get_serializer(obj_avaliacao)

        dados_plot = {'C': 0, 'PC': 0, 'NC': 0, 'NA': 0}
        secoes = avaliacao_json.data["secoes"]

        for secao in secoes:
            for sub in secao['subtopicos']:
                status = sub['status']
                dados_plot[status] += 1

        keys = dados_plot.keys()
        values = dados_plot.values()

        buffer = BytesIO()

        plt.bar(keys, values, color=['cyan'])
        plt.savefig(buffer, dpi=100)

        return HttpResponse(buffer.getbuffer(), content_type='image/png')

    @action(methods=['post'], detail=False)
    def get_by_code(self, request):
        try:
            avaliacao = Avaliacao.objects.get(
                codigo=request.data['codigo'])
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        avaliacaoJSON = AvaliacaoSerializer(avaliacao)
        return Response(avaliacaoJSON.data)

    @action(methods=['post'], detail=False)
    def confereAvaliacao(self, request):
        try:
            avaliacao = Avaliacao.objects.get(
                codigo=request.data['codigo'])
        except:
            return Response(status=HTTP_404_NOT_FOUND)

        return Response(status=HTTP_200_OK)
