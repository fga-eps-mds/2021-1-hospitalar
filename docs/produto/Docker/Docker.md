# Docker

## Histórico de versões

|    Data    | Versão |     Modificação      |       Autor        |
| :--------: | :----: | :------------------: | :----------------: |
| 30/08/2021 |  0.1   | Criação do documento |   @EduardoGurgel   |
| 07/09/2021 |  0.2   |  Revisão e correção  | @klyssmannoliveira |

## Introdução

Este documento tem como objetivo apresentar os passos de instalação e ambientação do docker.

### Instala o Docker

    https://docs.docker.com/desktop/windows/install/

### Copie o repositório para sua máquina

    git clone https://github.com/fga-eps-mds/2021-1-hospitalar.git
    git checkout -b doc/67-Docker
    git pull origin doc/67-Docker

### ou clone apenas na Branch

    git clone -b doc/67-Docker https://github.com/fga-eps-mds/2021-1-hospitalar.git

### Entre no repositório

    cd 2021-1-hospitalar

### Muda para a pasta do Docker

    cd 2021-1-hospitalar\docs\produto\Docker

### Cria a imagem

    Docker-compose build

### Inicia a imagem

    Docker compose up

### Verifica imagens online

    Docker ps -a

### Baixa o mongo compass

    https://www.mongodb.com/try/download/compass

### Acessar o mongo

    Na Porta: 27017
