# Contributing

## Histórico de versão

| Data | Versão | Modificação | Autor |
| :- | :- | :- | :- |
| 12/09/2021 | 0.1 | Criação do documento | [@SwampTG](https://github.com/SwampTG) |
| 13/09/2021 | 1.0 | Revisão do documento  | [@victordscabral](https://github.com/victordscabral) |

## Objetivo:

Critérios a serem seguidos por todos que queiram contribuir para o projeto, principalmente os colaboradores e desenvolvedores oficiais.

## Introdução

Toda e qualquer implementação de código, bugfix e qualquer outra aição ou alteração no repositório deve ser endereçado por uma issue, preenchendo,
adequadamente, o template de issue gerado automaticamente.

## Política de Branches

A partir das branches que serão resolvidas as issues e criados artefatos para serem adicionados ao projeto principal, após revisões.

Temos 3 tipos de branches, que, para projetos de menor escopo, como o nosso, tem uma menor burocracia e maior eficácia no gerenciamento do projeto.

- São elas:
  - [Main](#main)
  - [Features](#features)
  - [Hotfix](#hotfix)
  - [Doc](#doc)

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

#### Doc

As branches docs devem ser criadas quando há uma issue apontando a necessidade de criação de documentos. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**. Após a primeira versão estável, correções podem ser feitas diretamente na branch main.

Para criar uma branch desse tipo, devemos executar os comandos:

```git
git branch doc/indice-nome-da-issue
git checkout doc/indice-nome-da-issue
```

ou ainda

```git
git checkout -b doc/indice-nome-da-issue
```

## Política de Commits

Os commits são essenciais para acompanharmos as alterações e adições ao projeto. 

Deve ser usado o modo imperativo (ações e ordens assertivas) para mencionar o que foi feito.

Caso o commit trate de uma questão simples, faça o commit da seguinte maneira:

```git
git commit -m "#IdIssue - Mensagem"
```

Devido à importância, caso o commit trate de algo mais complexo, use o seguinte template para padronização, substituindo o texto dos comentários '# não será lido no commit':
Para utilizar o template, adicione o arquivo de template `.gitmessage`, estando na sua pasta local do repositório, na raiz, da seguinte maneira:

```git
git config commit.template .gitmessage

## Política de Pull Request

Para unir branches a main, devemos fazer um PR, indicando sobre o que é, o que foi feito, revisores e qual issue(s) será cumprida através do Merge.

**Primeiro abra o PR;**
**Abra o PR interligando com a issue usando `Closes #NumIssue` indique os revisores e os assignees;**
Lembre de descrever bem o PR
**Para um PR mais completo, principalmente para features e hotfix, deve-se utilizar o template disponível no repositório;**
```
