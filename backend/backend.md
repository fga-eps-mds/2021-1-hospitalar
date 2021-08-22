# Padrões Backend

- Todo Django app deve estar na pasta models

# Comandos

## Para criar um django app:

- esteja na pasta models
- django-admin startapp (nome)
- no arquivo apps.py que foi criado mude a linha 7 de
  - ('nome') para ('models.nome')
- Adicione o código a seguir no arquivo admin.py:

  ```
  from django.contrib import admin
  from .models import (Nome)

  class (Nome)Admin(admin.ModelAdmin):
      list_display = (atributos do modelo separados por virgula)

  admin.site.register((Nome), (Nome)Admin)
  ```

- Adicione o código a seguir no arquivo models.py:

  ```
  from django.db import models

  # Create your models here.


  class (Nome)(models.Model):

      #atributos vem aqui

      def _str_(self):
          return self.(algum atributo)
  ```

- Crie um arquivo chamado serializers.py e adicione o seguinte código:

  ```
  from rest_framework import serializers
  from .models import (Nome)


  class NomeSerializer(serializers.HyperlinkedModelSerializer):
      class Meta:
          model = (Nome)
          fields = ('id', atributos do modelo separados por virgula)
  ```

- Adicione o código a seguir no arquivo views.py:

  ```
  from rest_framework import viewsets

  from .models import (Nome)
  from .serializers import (Nome)Serializer

  # Create your views here.


  class (Nome)View(viewsets.ModelViewSet):

      serializer_class = (Nome)Serializer
      queryset = (Nome).objects.all()
  ```

- No arquivo config.py (agora dentro de backend) adicione na lista de installed apps uma string nesse formato:
  - 'models.(nome)'
- No arquivo api.py adicione o seguinte código:

  ```
  from models.(nome) import views as (Nome)Views

  (dentro da função)
  router.register(r'(nome)', (Nome)Views.(Nome)View)
  ```

- Execute os comandos:
  - python ./manage.py makemigrations
  - python ./manage.py migrate

# Documentação útil

- [Django](https://docs.djangoproject.com/en/3.2/)
- [Django Rest Framework](https://www.django-rest-framework.org/)
