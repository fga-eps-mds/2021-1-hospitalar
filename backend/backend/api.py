from rest_framework import routers
from models.Configuracao.views import ConfiguracaoView
from models.Avaliacao.views import AvaliacaoView
'''
    Função que retorna um objeto que contém as urls do backend.
    Para incluir uma nova url utilize router.register
    de acordo com o padrão escrito no markdown do backend.

    @see https://www.django-rest-framework.org/api-guide/routers/#using-include-with-routers
'''


def create_api():
    router = routers.DefaultRouter()
    router.register(r'configuracao', ConfiguracaoView)
    router.register(r'avaliacao', AvaliacaoView)
    return router
