from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import GeracaoPdf


class GeracaoPdfAdmin(admin.ModelAdmin):
    list_display = ()


admin.site.register(GeracaoPdf, GeracaoPdfAdmin)
