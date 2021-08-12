from .models import Pessoa
from django.contrib import admin


class PessoaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'idade', 'telefone', 'endereco', 'cpf')

# Register your models here.


admin.site.register(Pessoa, PessoaAdmin)
