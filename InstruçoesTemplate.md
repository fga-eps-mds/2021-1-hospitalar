Para melhor visualização leia esse arquivo como um markdown

# Template em branco

## Preparando tecnologias:

- backend django usando python 3.8 (venv ou anaconda)
- frontend react usando node 14 lts
- Banco de dados MongoDB community
- Comandos para preparar o node (dentro da pasta frontend):
  - yarn
- Comandos para preparar o python (dentro da pasta backend):
  - (ative seu venv ou anaconda)
  - pip install django
  - pip install django_rest_framework
  - pip install django-cors-headers
  - pip install djongo
  - python ./manage.py makemigrations
  - python ./manage.py migrate

## Compilando:

- Frontend:
  - yarn start
- Backend:
  - python ./manage.py runserver

## Adicionando dependências

- Frontend:
  - yarn add (nome do pacote)
  - yarn add @types/(nome do pacote)
    - OBS: nem todos os pacotes precisam que types sejam instalados, leia a documentação.
- Backend:
  - (certifique-se que seu venv ou anaconda esteja ativado)
  - pip install (nome do pacote)

## Adicionando app ao Django:

- Leia o markdown na pasta backend

## Adicionando página ao Frontend

- Leia o markdown na pasta frontend
