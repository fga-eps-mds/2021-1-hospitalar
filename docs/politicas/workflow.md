# Workflow

## Histórico de versão

| Data       | Versão | Modificação                              | Autor                                                |
| :--------- | :----- | :--------------------------------------- | :--------------------------------------------------- |
| 18/08/2021 | 0.1    | Criação da primeira versão do documento  | [@SwampTG](https://github.com/SwampTG)               |
| 31/08/2021 | 0.2    | Adição de mais comandos e template do PR | [@SwampTG](https://github.com/SwampTG)               |
| 13/09/2021 | 1.0    | Revisão do documento                     | [@victordscabral](https://github.com/victordscabral) |
| 16/09/2021 | 1.1    | Alteração no path das imagens            | [@victordscabral](https://github.com/victordscabral) |

## Introdução

Para que os colaboradores possam contribuir de forma eficaz, recomendamos esse workflow para diminuir os riscos de conflitos.

**Os passos são os seguintes:**

1. Dê `git status` para verificar seu repositório local e, se tudo estiver okay, logo após dê `git pull` para atualizar sua branch com o repositório
2. Crie uma branch para a issue/funcionalidade, seguindo as [políticas](policies.md)
3. Faça um push da sua branch para o GitHub:

```git
git push origin nome-da-branch-criada
```

4. Adicione e faça [commit](policies.md) de seus arquivos no repositório local, com `git add` e `git commit`, seguindo as políticas do reposiório
5. Dê, novamente, um push para a branch criada. Commits e pushes devem ser feitos a cada alteração relevante.
6. [OPCIONAL] Após todos os commits e pushes, faça um rebase para identificar conflitos antes do Pull Request:
   `git rebase main`
7. Após testes, faça um Pull Request, linkando com a issue:

   - No repositório, clique em Pull request:
     ![pull_req_tut_1](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/pull_req_tut_1.png?raw=true)

   - Verifique a branch de origem e de destino.
   - Preencha o template (remova as partes não necessárias para o seu PR):

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

- Crie seu Pull Request
- Volte aos Pull Requests. Na sidebar à direita, clique em Linked Issues:
  ![linked_issues](https://github.com/fga-eps-mds/2021-1-hospitalar/blob/main/docs/assets/politicas/linked_issues.png?raw=true)
- Clique na issue relacionada.
- Resolva possíveis conflitos.
- Para mais informações, veja: [Políticas](policies.md)
