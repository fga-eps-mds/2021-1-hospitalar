from rest_framework import viewsets
from rest_framework.generics import get_object_or_404
from .models import Avaliacao
from rest_framework.decorators import action
from django.http import HttpResponse
from .serializers import AvaliacaoSerializer
from django.http import HttpResponse
from rest_framework.decorators import action
from rest_framework import viewsets
from .relatorio.printing import MyPrint
from io import BytesIO

# Create your views here.

# Create your views here.

class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()

    @action(methods=['get'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # buffer armazena os bytes para o PDF (PDF é arquivo compilável)
        buffer = BytesIO()

        # exemplo para a avaliação cadastrada com código fgvgrad
        getAval2 = get_object_or_404(codigo=request.codigo)

        # Utilizando o construtor para o Relatório
        # buffer, Formato e Código da Aval.
        report = MyPrint(buffer, 'A4', getAval2.codigo)

        # Função que retorna o PDF utilizando o valor do buffer
        pdf = report.printReport()

        # Armazenando o PDF na resposta do servidor
        response.write(pdf)

        return response
