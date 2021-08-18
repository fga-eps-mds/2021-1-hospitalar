# Políticas do Repositório

## Histórico de versão

| Data | Versão | Modificação | Autor |
| :- | :- | :- | :- |
| 17/08/2021 | 0.1 | Criação da primeira versão do documento | Adrian Soares Lopes |

## Objetivo:

Critérios a serem seguidos por todos que queiram contribuir para o projeto, principalmente os colaboradores e desenvolvedores oficiais.

**Índice do documento**:
	*  [Política de Branches](#politica-de-branches)
	*  [Política de Commits](#politica-de-commits)

## Política de Branches

A partir das branches que serão resolvidas as issues e criados artefatos para serem adicionados ao projeto principal, após revisões.

Temos 3 tipos de branches, que, para projetos de menor escopo, como o nosso, tem uma menor burocracia e maior eficácia no gerenciamento do projeto.

São elas:
	- [Main](#main)
	- [Features](#features)
	- [Hotfix](#hotfix)

#### Main:
**Existe somente uma branch Main!** Essa branch contém o projeto em seu estado mais estável. É nessa branch que deve-se ter todos os arquivos antes de alguma release. Quando alguma funcionalidade é implementada, deve ser feito um pull request para essa branch, que será analisada pelo colaborador responsável.
 
Deverão ser utilizadas tags, o que eliminará a necessidade de criação de branches develop. <Incrementar essa parte>

#### Features:
Essa ramificação é criada sempre que uma issue endereça uma nova funcionalidade para o projeto. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**. Para criar uma branch desse tipo, devemos executar os comandos:
```git
	git branch feature/nome-da-issue-indice
	git checkout nome-da-issue-indice
```

ou ainda
```git
	git checkout -b feature/nome-da-issue-indice
```

#### Hotfix
As branches hotfix devem ser criadas quando há uma issue apontando a necessidade de correção de bugs nas funcionalidades do projeto. **Essa branch é criada apartir da [Main](#main) e é mesclada à mesma branch**. Para criar uma branch desse tipo, devemos executar os comandos:
```git
	git branch hotfix/nome-da-issue-indice
	git checkout hotfix/nome-da-issue-indice
```

ou ainda
```git
	git checkout -b hotfix/nome-da-issue-indice
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
#Id-da-Issue - Título do commit: comece com  letra maiúscula, objetivo
#Não mais que 50 chars,Essa linha possui   50                   #

#Pular linha

# Corpo: Explique o quê e porque
# Não mais que 72 caracteres (essa linha possui)                                                                             #

#OPCIONAL: Caso haja, inclua essa linha de co-autores do seu commit para cada contribuidor.
#Pular linha
# Co-authored-by: nome1 <usuário1@users.noreply.github.com>
# Co-authored-by: nome2 <usuário2@users.noreply.github.com>
#
```
Para utilizar o template, adicione o arquivo de template `.gitmessage`, estando na sua pasta local do repositório, da seguinte maneira:
```git
git config commit.template ~/.gitmessage
```
