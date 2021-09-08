from .models import User
from django.contrib import admin


class PessoaAdmin(admin.ModelAdmin):
    list_display = ('Pedro', 'pedrophdv@outlook.com', '123456', 'dev')

# Register your models here.


admin.site.register(User, PessoaAdmin)
