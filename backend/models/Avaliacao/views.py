from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from rest_framework.decorators import action
from django.http import HttpResponse
from reportlab.pdfgen import canvas
from .models import Avaliacao, Secao
from .serializers import AvaliacaoSerializer

from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.units import inch

# TO-DO!!!!!


class AvaliacaoView(viewsets.ModelViewSet):

    serializer_class = AvaliacaoSerializer
    queryset = Avaliacao.objects.all()
    lookup_field = 'codigo'

    @action(methods=['get'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # Create the PDF object, using the response object as its "file."
        # p = canvas.Canvas(response)

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.

        doc = SimpleDocTemplate(response)
        styles = getSampleStyleSheet()
        Story = [Spacer(1, 2*inch)]
        style = styles["Normal"]
        for i in range(100):
            bogustext = ("This is Paragraph number %s.  " % i) * 20
            p = Paragraph(bogustext, style)
            Story.append(p)
            Story.append(Spacer(1, 0.2*inch))
        doc.build(Story)

        # p.drawString(100, 100, "Hello world.")

        # Close the PDF object cleanly, and we're done.
        return response
