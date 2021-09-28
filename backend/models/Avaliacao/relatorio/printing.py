from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import letter, A4


class MyPrint:
    def __init__(self, buffer, pagesize):
        self.buffer = buffer
        if pagesize == 'A4':
            self.pagesize = A4
        elif pagesize == 'letter':
            self.pagesize = letter
        self.width, self.height = self.pagesize

    def printReport(self):
        buffer = self.buffer

        doc = SimpleDocTemplate(
            buffer,
            rightMargin=72,
            leftMargin=72,
            topMargin=72,
            botomMargin=72,
            pagesize=self.pagesize
        )

        elements = [Spacer(1, 2*inch)]

        styles = getSampleStyleSheet()
        styles.add(ParagraphStyle('centered', alignment=TA_CENTER))

        elements.append(Paragraph("Meu Teste 1", styles['Heading1']))
        for i in range(100):
            bogustext = ("This is Paragraph number %s.  " % i) * 20
            p = Paragraph(bogustext, styles['Normal'])
            elements.append(p)
            elements.append(Spacer(1, 0.2*inch))

        doc.build(elements)

        # p.drawString(100, 100, "Hello world.")
        pdf = buffer.getvalue()

        # Close the PDF object cleanly, and we're done.
        buffer.close()
        return pdf
