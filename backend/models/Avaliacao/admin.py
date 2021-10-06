
'''from backend.models.Secao.models import Subtopico'''
from django.contrib import admin
from django.contrib.admin.decorators import display
from .models import Avaliacao, Subtopico, Secao
# Register your models here.

@admin.register(Avaliacao)
class AvaliacaoAdmin(admin.ModelAdmin):
    list_display = ('secao', 'user','codigo', 'nomeHospital', 'idsAvaliadores', 'data')

@admin.register(Subtopico)
class SubtopicoAdmin(admin.ModelAdmin):
    list_display = ('secao', 'nome', 'status', 'comentario')


@admin.register(Secao)
class SecaoAdmin(admin.ModelAdmin):
    display = ('topico')
