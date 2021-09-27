from rest_framework import routers
from models.Secao.views import SecaoView
from models.Configuracao.views import ConfiguracaoView
'''
    Função que retorna um objeto que contém as urls do backend.
    Para incluir uma nova url utilize router.register
    de acordo com o padrão escrito no markdown do backend.

    @see https://www.django-rest-framework.org/api-guide/routers/#using-include-with-routers
'''


def create_api():
    router = routers.DefaultRouter()
    router.register(r'secao', SecaoView)
    router.register(r'configuracao', ConfiguracaoView)
    return router
