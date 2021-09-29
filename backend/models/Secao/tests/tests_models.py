from django.db import models
from django.test import TestCase
from backend.models.Secao import Subtopico
# Create your tests here.

class SubtopicoTestCase(TestCase):
    
    def setUp(self):
        Subtopico.objects.create(
            secao="otorrino",
            nome="2sgt farias",
            status="atendido",
            comentario="paciente recuperado",
        )

    def test_retorno_str(self):
        s1 = Subtopico.objects.get(status = 'atendido')
        self.assertEquals(s1.__str__(), 'otorrino')