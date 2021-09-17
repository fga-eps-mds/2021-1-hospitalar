# Django e Python

## Histórico de versão

|    Data    | Versão |                Modificação                 |           Autor            |
| :-------- | :---- | :---------------------------------------- | :------------------------ |
| 19/08/2021 |  0.1   | Criação do documento e formatação do corpo | [@EduardoGurgel](https://github.com/EduardoGurgel)      |
| 24/08/2021 |  0.2   |        Inclusão da parte de python         | [@EduardoGurgel](https://github.com/EduardoGurgel) e [@jvsdurso](https://github.com/jvsdurso) |
| 07/09/2021 |  1.0   |             Revisão e correção             | [@klyssmannoliveira](https://github.com/klyssmannoliveira)     |
| 13/09/2021 |  1.1   | Alteração no histórico de versão           | [@victordscabral](https://github.com/victordscabral) |

## Introdução

Este documento tem como objetivo apresentar os passos de instalação e comandos iniciais do Django e Python.

## 1. Passos iniciais no Windows

### Instale o Python

    https://www.python.org/downloads/

### Execute o powershell como administrador

### Crie a pasta

    mkdir projetodjango

    cd projetodjango

### Instale o virtualenv

    pip install virtualenv

### Verifique a versão do virtualenv

    virtualenv –-version

### Crie a máquina virtual

    python -m venv venv

### Entre na pasta virtual

    venv/Scripts/Activate

### Instale o Django

    pip install django

### Inicie o projeto Django

    Django-admin startproject nomedoprojeto

### Entra na pasta do projeto

    cd nomedoprojeto

### Inicia a aplicação

    python manage.py startapp aplicativo1

### Inicia o servidor

    python manage.py runserver

## 2. Comandos básicos de Python

Como referência utilizar-se-á o documento disponível no link: [https://docs.python.org/pt-br/3/tutorial/](url)

### Leitura do teclado

```
...print("Digite seu nome:")
...nome = input()
>>> Time A
...print("Bem-vindo, ", nome)

...Bem vindo, Time A
```

### Condições

#####

- IFs

Ex.:

```
>>> x = int(input("Leia um inteiro: "))
Leia um inteiro: 42
>>> if x < 0:
...     x = 0
...     print('Negativo se torna zero')
... elif x == 0:
...     print('Zero')
... elif x == 1:
...     print('Um')
... else:
...     print('Mais')

... Mais
```

- For

```
for variavel in lista
comandos
```

Ex.:

```
... nomes = ['Pedro', 'João', 'Leticia']
... for n in nomes:
...     print(n)

... Pedro
... João
... Leticia
```

### Classes

```
class ClassName:
    <statement-1>
    .
    .
    .
    <statement-N>
```

#####

- Objetos de classe

```
class MyClass:
    """A simple example class"""
    i = 12345

    def f(self):
        return 'hello world'
```

Para instanciar uma classe usa-se:

```
x = MyClass()
```
