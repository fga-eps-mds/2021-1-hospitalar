# Políticas do Repositório

## Histórico de versão

| Data       | Versão | Modificação                             | Autor                                                |
| :--------- | :----- | :-------------------------------------- | :--------------------------------------------------- |
| 17/08/2021 | 0.1    | Criação da primeira versão do documento | [@SwampTG](https://github.com/SwampTG)               |
| 31/08/2021 | 0.2    | Remoção, tags e PR                      | [@SwampTG](https://github.com/SwampTG)               |
| 13/09/2021 | 1.0    | Revisão do documento                    | [@victordscabral](https://github.com/victordscabral) |
| 16/09/2021 | 1.1    | Alteração no path das imagens           | [@victordscabral](https://github.com/victordscabral) |

## Objetivo:

Critérios a serem seguidos por todos que queiram contribuir para o projeto, principalmente os colaboradores e desenvolvedores oficiais.

**Índice do documento**:

- [Políticas do Repositório](#políticas-do-repositório)
  - [Histórico de versão](#histórico-de-versão)
  - [Objetivo:](#objetivo)
  - [Política de Branches](#política-de-branches)
    - [Main](#main)
      - [Features](#features)
      - [Hotfix](#hotfix)
      - [Doc](#doc)
  - [Política de Commits](#política-de-commits)
  - [Política de Remoção de Branches](#política-de-remoção-de-branches)
  - [Política de Pull Request](#política-de-pull-request)

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

```git
git tag -a v1.1 -m "Descrição da tag"
```

Substitua os números dentro do seu contexto de versão

- **Para transferir tags para o rep:**

```git
git push origin --tags
```

- **Para associar tags com commits:**

```git
git tag -a nomedatag hashcode-do-commit
```

- **Para listar tags:**

```git
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

```txt
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

Acesse a lista completa de branches do repositório:

![branch_list_delete_1](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/branch_list_delete_1.png?raw=true)

Certifique-se que a branch já foi unida a main e clique no símbolo de lixo:

![branch_list_delete_2](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/branch_list_delete_2.png?raw=true)

## Política de Pull Request

Para unir branches a main, devemos fazer um PR, indicando sobre o que é, o que foi feito, revisores e qual issue(s) será cumprida através do Merge.

**Primeiro abra o PR:**
![p-r_fim](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/p-r_open.png?raw=true)

**Abra o PR interligando com a issue usando `Closes #NumIssue` indique os revisores e os assignees**

Lembre de descrever bem o PR:

![p-r_fim](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/p-r_fim.png?raw=true)

**Para um PR mais completo, principalmente para features e hotfix, deve-se utilizar o template:**

```markdown
# Descrição

Por favor inclua o resumo das mudanças e a issue de referência. Também inclua motivação e contexto. Liste qualquer outra dependência que precise ser concluída para que este PR seja finalizado.

Fixes #(issue) <- para correções

Closes #(issue) <- para finalizações

## Tipo de mudança

Por favor remova as não relevantes!

- [ ] Bug fix (mudança que corrige alguma issue)
- [ ] Novo feature (mudança que adiciona nova funcionalidade)
- [ ] Breaking change (Mudança que pode alterar o funcionamento de algo implementado, inclusive quebrar/bugar)
- [ ] Se necessita de mudança na documentação (diagramas, docs, backlog...)

# Como foi testado?

Descreva os testes rodados. Coloque instruções para serem rodados pelos revisores. Coloque qualquer outro detalhe relevante.

- [ ] Teste A
- [ ] Teste B

# Checklist:

- [ ] Meu código segue os princípios do projeto.
- [ ] Revisei o meu código
- [ ] Comentei meu código muito bem, principalmente em partes difíceis de entender
- [ ] Fiz as mudanças necessárias na documentação para se adequar ao meu código.
- [ ] Minhas mudanças não geram Warnings para o compilador/editor.
- [ ] Realizei testes que comprovam o funcionamento da nova funcionalidade/fix.
- [ ] Testes unitários necessários/criados foram feitos e o código passou.
```
