from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework.decorators import action
from django.http import HttpResponse
from reportlab.pdfgen import canvas
from .models import Avaliacao, Secao
from .serializers import AvaliacaoSerializer
from io import BytesIO
from .relatorio.printing import MyPrint


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()
    lookup_field = 'codigo'

    @action(methods=['get'], detail=False)
    def generatePDF(buffer, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # Create the PDF object, using the response object as its "file."
        buffer = BytesIO()

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.
        report = MyPrint(buffer, 'A4')
        pdf = report.printReport()

        response.write(pdf)

        return response
