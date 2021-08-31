# Políticas do Repositório

## Histórico de versão

| Data | Versão | Modificação | Autor |
| :- | :- | :- | :- |
| 17/08/2021 | 0.1 | Criação da primeira versão do documento | Adrian Soares Lopes |

## Objetivo:

Critérios a serem seguidos por todos que queiram contribuir para o projeto, principalmente os colaboradores e desenvolvedores oficiais.

**Índice do documento**:

- [Política de Branches](#politica-de-branches)
- [Política de Commits](#politica-de-commits)
- [Política de Remoção de Branches](#politica-de-remocao-de-branches)

## Política de Branches

A partir das branches que serão resolvidas as issues e criados artefatos para serem adicionados ao projeto principal, após revisões.

Temos 3 tipos de branches, que, para projetos de menor escopo, como o nosso, tem uma menor burocracia e maior eficácia no gerenciamento do projeto.

- São elas:
  - [Main](#main)
  - [Features](#features)
  - [Hotfix](#hotfix)

### Main

**Existe somente uma branch Main!** Essa branch contém o projeto em seu estado mais estável. É nessa branch que deve-se ter todos os arquivos antes de alguma release. Quando alguma funcionalidade é implementada, deve ser feito um pull request para essa branch, que será analisada pelo colaborador responsável.

Deverão ser utilizadas tags, o que eliminará a necessidade de criação de branches develop. Com as tags temos referência de versão, correções e afins. Devemos associar tags aos commits, quando necessário.

- **Para criar tags:**

``` git
git tag -a v1.1 -m "Descrição da tag"
```

Substitua os números dentro do seu contexto de versão

- **Para transferir tags para o rep:**

``` git
git push origin --tags
```

- **Para associar tags com commits:**

``` git
git tag -a nomedatag hashcode-do-commit
```

- **Para listar tags:**

``` git
git tag
```

#### Features

Essa ramificação é criada sempre que uma issue endereça uma nova funcionalidade para o projeto. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**. Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch feature/indice-nome-da-issue
git checkout indice-nome-da-issue
```

ou ainda

```git
git checkout -b feature/indice-nome-da-issue
```

#### Hotfix

As branches hotfix devem ser criadas quando há uma issue apontando a necessidade de correção de bugs nas funcionalidades do projeto. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**.

Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch hotfix/indice-nome-da-issue
git checkout hotfix/indice-nome-da-issue
```

ou ainda

```git
git checkout -b hotfix/indice-nome-da-issue
```

## Política de Commits

Os commits são essenciais para acompanharmos as alterações e adições ao projeto. 

Deve ser usado o modo imperativo (ações e ordens assertivas) para mencionar o que foi feito.

Caso o commit trate de uma questão simples, faça o commit da seguinte maneira:

```git
git commit -m "#IdIssue - Mensagem"
```

Devido à importância, caso o commit trate de algo mais complexo, use o seguinte template para padronização, substituindo o texto dos comentários '# não será lido no commit':

``` txt
. #Id-da-Issue - Título do commit: comece com  letra maiúscula, objetivo
#Não mais que 50 chars,Essa linha possui   50                   #
#Pular linha

# Corpo: Explique o quê e porque
# Não mais que 72 caracteres (essa linha possui)                                                                             #

#OPCIONAL: Caso haja, inclua essa linha de co-autores do seu commit para cada contribuidor.
#Pular 2 linhas


# Co-authored-by: nome1 <usuário1@users.noreply.github.com>
# Co-authored-by: nome2 <usuário2@users.noreply.github.com>
#Pular linha

```

Para utilizar o template, adicione o arquivo de template `.gitmessage`, estando na sua pasta local do repositório, na raiz, da seguinte maneira:

```git
git config commit.template .gitmessage
```

## Política de Remoção de Branches

A remoção será feita logo após um PR revisado, aceito e já fundido na branch main.

**Basta seguir os seguintes passos:**

acesse a lista completa de branches do repositório:

![branch_list_delete_1](assets/branch_list_delete_1.png
)

Certifique-se que a branch já foi unida a main e clique no símbolo de lixo:

![branch_list_delete_1](assets/branch_list_delete_2.png
)
