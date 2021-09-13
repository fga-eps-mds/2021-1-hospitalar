# Tutorial de Ambientação MongoDB

## Histórico de versão

|    Data    | Versão |              Modificação               |         Autor         |
| :-------- | :---- | :------------------------------------ | :------------------- |
| 24/08/2021 |  0.1   |          Criação do documento          | [@PedroCassianoMartins](https://github.com/PedroCassianoMartins) |
| 24/08/2021 |  0.2   | Adição dos comandos básicos de MongoDB | [@PedroCassianoMartins](https://github.com/PedroCassianoMartins) |
| 24/08/2021 |  0.3   |          Ajuste de formatação          | [@PedroCassianoMartins](https://github.com/PedroCassianoMartins) |
| 07/09/2021 |  0.4   |           Revisão e correção           | [@klyssmannoliveira](https://github.com/klyssmannoliveira)   |
| 13/09/2021 |  1.1   | Alteração no histórico de versão       | [@victordscabral](https://github.com/victordscabral) |

## Introdução

Este documento apresenta os passos de instalação e ambientação no MongoDB.

### Instale o MongoDB

     https://www.mongodb.com/try/download/community

Baixe uma versão boa para o seu OS
Escolha o local que quiser para a instalação

### Instale MongoCompass

    https://www.mongodb.com/try/download/compass

Baixe a última versão
Instale o mongoCompass

### Conectando o server

- Para usar o Mongo Compass precisamos primeiro habilitar o server do MongoDB
- Abra seu terminal e mude a pasta para a pasta de instalacao do MongoDB
- Execute o mongod.exe pelo terminal
- Abra outro terminal e muda também para a pasta do MongoDB
- Execute o mongos.exe pelo terminal

# Comandos MongoDB

Uma lista de comandos do MongoDB (passível de mudanças).
\*\*Na hora de fazer substitua "collection" pelo nome da sua collection, exceto ao criar uma.

### 1. Criando uma Collection

- db.createCollection("nome") = cria uma collection;

### 2. Insere um documento na Collection

- db.nomeCollection.insert({conteúdo}) = insere um conteúdo na collection com o conteúdo dentro das chaves;
  Ex. db.nomeCollection.insert( { name: "Pedro"} ) = cria um documento com um item name: "Pedro";

- db.nomeCollection.insertMany( [ { conteudo } ], [ {conteudo} ] ) = inseri varios conteúdos na collection com o conteudo dentro das chaves;
  Ex. db.nomeCollection.insertMany( [ { name:"Pedro" } ], [ {Cargo: "Aluno"} ] );

### 3. Mostrando a Collection

- db.collection.find() = busca e mostra os registros da collection digitada e da pra procurar com conteúdo dentro do collection como ("name: blabla") entre parênteses;
- db.collection.find().pretty() = busca e mostra uma lista dos registros bem bonitinho;

### 4. Buscando conteúdos com um item especifico

- db.collection.find({"argumento"}) = procura com conteúdo dentro do collection com o argumento entre parênteses;
  Ex: db.collection.find({"name: Pedro"}) ;

### 5. Busca com um limite N

- db.collection.find().limit(n) = busca com um limite;

### 6. Mostra quantidade de Conteudos na Collection

- db.collection.find().count() = retorna a quantidade de itens na collection. Também dá pra fazer um count com o conteúdo do find;
  Ex: db.collection.find({"name: blabla"}).count();

### 7. Remove conteudo

- db.collection.remove() = remove o registro do item do id digitado dentro dos parênteses naquela collection;
  Ex: db.collection.remove({\_id: ObjectId(“12cd345325dfgsae213”)}) ;

### 8. Da update em um conteudo

- db.collection.update() = altera um item do registro na collection;
  Ex: db.collection.upadte(
  {\_id: ObjectId(“12cd345325dfgsae213”)},
  {$set: {name: “Lucas”}}
  );

### 9. Dá para encontrar registros com .find() que, por exemplo, têm preços menores e iguais, ou preços maiores e iguais a um certo número que deseje com:

$eq = igual
$gt = maior
$gte = maior ou igual
$lt = menor
$lte = menor ou igual

Ex: db.collection.find({price: { $eq: 30.0}}) = procura itens com preços iguais a 30;

Também dá pra procurar itens que não tem aquele preço com:

$ne = retorna itens que não tem aquele valor
$nin = retorna itens que não tem aqueles valores

Existem também outras ajudas com find como:
$and = procura itens com 2 ou mais valores
$or = procura itens com 1 valor ou outro.

### 10.Verificando os usuarios do database

- db.getUsers() = vai retornar uma lista de usuarios do database;

### 11. Criando um usuario para o database

- db.createUser( {user:"nome", pwd:"senha", roles: [{role:"role do usuario", db;"database"}]});

### 12. Autenticando o usuario (entrar)

- db.auth("username", "senha") = se tiver correto retorna 1, se não retorna 0 e um erro;

### 13. Para importar arquivos CSV ou JSON

Primeiro abra o terminal da sua máquina e mude a pasta para a bin do MongoDB
Depois use o comando:
Windows: mongoimport /db:nome_da_database /collection:nome_da_collection /type:tipo_do_arquivo /file:nome_do_arquivo.tipo /headerline
Linux: mongoimport -d nome_da_database -c nome_da_collection --type tipo_do_arquivo --file nome_do_arquivo.tipo --headerline
