Para melhor visualização leia esse arquivo como um markdown

# Template em branco

## Preparando tecnologias:

- backend django usando python 3.8 e orquestrador de pacotes PipEnv
- frontend react usando node 14 lts
- Banco de dados PostgreSQL
- Comandos para preparar o node (dentro da pasta frontend):
  - yarn
- Comandos para preparar o python (dentro da pasta backend):
  - pip install pipenv
  - pipenv install
  - pipenv shell
  - python ./manage.py migrate

## Compilando:

- Frontend:
  - yarn start
- Backend:
  - python ./manage.py runserver

## Docker

Para rodar o backend (incluindo um banco de dados PostgreSQL) em um container Docker execute os seguintes comandos dentro da pasta backend:

- docker-compose build
- docker-compose up

Não esqueça de desligar o container ao terminar o trabalho:

- docker-compose down

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
