from reportlab.pdfgen import canvas
from rest_framework import viewsets
from django.http import HttpResponse
from .models import GeracaoPdf
from .serializers import GeracaoPdfSerializer
from rest_framework.decorators import action

# Create your views here.


class GeracaoPdfView(viewsets.ModelViewSet):

    serializer_class = GeracaoPdfSerializer
    queryset = GeracaoPdf.objects.all()

    @action(methods=['get'], detail=False)
    def generatePDF(self, request):
        # Create the HttpResponse object with the appropriate PDF headers.
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="somefilename.pdf"'

        # Create the PDF object, using the response object as its "file."
        p = canvas.Canvas(response)

        # Draw things on the PDF. Here's where the PDF generation happens.
        # See the ReportLab documentation for the full list of functionality.
        p.drawString(100, 100, "Hello world.")

        # Close the PDF object cleanly, and we're done.
        p.showPage()
        p.save()
        return response