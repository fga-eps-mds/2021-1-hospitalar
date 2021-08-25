# Django

## 1. Passos iniciais Windows

### Instala o Python
   
    https://www.python.org/downloads/ 
    

### Executa o powershell como administrador
### Cria a pasta
     
    mkdir projetodjango
    
    cd projetodjango

### Instala o virtualenv
    
    pip install virtualenv

### Verifica a versão do virtualenv:
    
    virtualenv –-version

### Cria a máquina virtual
   
    python -m venv venv

### Entra na pasta virtual
   
    venv/Scripts/Activate

### Instala o Django
   
    pip install django

### Inicia o projeto Django
   
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