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
