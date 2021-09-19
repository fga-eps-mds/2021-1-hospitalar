from django.contrib import admin

# Register your models here.
from .models import GraficoRelatorio

class GraficoRelatorioAdmin(admin.ModelAdmin):
    list_display = ()

admin.site.register(GraficoRelatorio, GraficoRelatorioAdmin)