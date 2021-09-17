# Backlog do Produto

## Histórico de versão

| Data       | Versão | Modificação                                  | Autor                                                    |
| :--------- | :----- | :------------------------------------------- | :------------------------------------------------------- |
| 22/08/2021 | 0.1    | Primeira Versão do Documento                 | [@Pedro-V8](https://github.com/Pedro-V8) |
| 01/09/2021 | 0.2    | Segunda Versão do Documento                  | [@PedroCassianoMartins](https://github.com/PedroCassianoMartins), [@EduardoGurgel](https://github.com/EduardoGurgel) e [@jvsdurso](https://github.com/jvsdurso) |
| 01/09/2021 | 0.3    | Segunda Versão do Documento Revisada         | [@PedroCassianoMartins](https://github.com/PedroCassianoMartins), [@EduardoGurgel](https://github.com/EduardoGurgel) e [@jvsdurso](https://github.com/jvsdurso) |
| 08/09/2021 | 0.4    | Atualização dos épicos                       | [@gpersijn](https://github.com/gpersijn), [@klyssmannoliveira](https://github.com/klyssmannoliveira), [@SwampTG](https://github.com/SwampTG) e [@victordscabral](https://github.com/victordscabral) |
| 12/09/2021 | 1.0    | Revisão do documento e melhoria a introdução | [@klyssmannoliveira](https://github.com/klyssmannoliveira) |
| 13/09/2021 | 1.1    | Alteração no histórico de versão             | [@victordscabral](https://github.com/victordscabral) |

## Sobre o Documento

O Backlog do Produto é gerenciado pelo Product Owner e contêm os itens ordenados que serão desenvolvidos pelo Time de Desenvolvimento para o produto. Esses itens de trabalho são expressos na forma de necessidades do usuário, objetivos de negócios dos clientes e demais partes interessadas ou funcionalidades do produto. O Backlog do Produto é uma origem única dos requisitos para qualquer mudança a ser feita no produto.

Desta forma, o documento a seguir contém as histórias dos usuários sobre quais objetivos eles possuem ao entrar no sistema, quais funcionalidades eles desejam que tenha e as principais ações que irão fazer ao longo do Software. Junto a isso estão classifcadas as prioridades de cada enredo, podendo ser Alta, Média ou Baixa.

Para entender melhor sobre os casos foi decidido dividir entre dois personagens, são eles:

- Oficial é o administrador do sistema, onde tem o acesso ao gerenciamento e controle de várias partes do produto.

- Soldado é o analista do sistema, onde terá que entrar na aplicação para realizar as avaliações.

## Versão 1

| Épico                | Id  | Eu, como | Desejo                                        | Para que                             | Prioridade |
| :------------------- | :-- | :------- | :-------------------------------------------- | :----------------------------------- | :--------- |
| Conta                | H01 | Oficial  | realizar login                                | tenha acesso ao menu principal       | Alta       |
| Conta                | H02 | Soldado  | realizar login                                | tenha acesso ao menu principal       | Alta       |
| Conta                | H03 | Oficial  | gerenciar contas                              | tenha um controle dos soldados       | Alta       |
| Perfil Administrador | H04 | Oficial  | criar novas avaliações                        | consiga certificar um hospital       | Alta       |
| Perfil Administrador | H05 | Oficial  | gerenciar as avaliações                       | tenha um controle das avaliações     | Média      |
| Perfil Administrador | H06 | Oficial  | editar os itens das avaliações                | melhorar o entendimento do item      | Média      |
| Perfil Administrador | H07 | Oficial  | gerar os relatórios                           | possa encaminhar para os hospitais   | Alta       |
| Perfil Avaliador     | H00 | Soldado  | utilizar id da avaliação                      | consiga preencher os dados           | Alta       |
| Perfil Avaliador     | H00 | Soldado  | pontuar os itens da avaliação                 | possa alimentar o relatório          | Alta       |
| Perfil Avaliador     | H00 | Soldado  | adicionar comentários                         | tenha uma maior clareza da pontuação | Média      |
| Perfil Avaliador     | H00 | Soldado  | requisitar para o Oficial alterações da conta | tenha um melhor acesso à conta       | Baixa      |
| Comunicação          | H00 | Soldado  | receber o id via email                        | tenha acesso à avaliação             | Baixa      |
| Relatório            | H00 | Oficial  | visualisar os gráficos da avaliação           | possa oficializar o documento        | Média      |
| Relatório            | H00 | Oficial  | gerar o relatório em Pdf                      | possa entregar ao cliente            | Alta       |

## Versão 2

| Épico     | Id  | Eu, como | Desejo                                        | Para                                                                                                                   | Prioridade |
| :-------- | :-- | :------- | :-------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- | :--------- |
| Login     | H01 | Oficial  | realizar login                                | que tenha acesso ao menu principal                                                                                     | Alta       |
| Login     | H02 | Oficial  | editar login                                  | que possa realizar modificações no _username_ e na senha, caso os esqueça                                              | Média      |
| Avaliação | H03 | Oficial  | editar os itens das avaliações                | melhorar o entendimento do item                                                                                        | Média      |
| Avaliação | H04 | Oficial  | iniciar novas avaliações                      | que consiga certificar um hospital                                                                                     | Alta       |
| Avaliação | H05 | Oficial  | adicionar índice                              | que possa distinguir a seção                                                                                           | Alta       |
| Avaliação | H06 | Oficial  | adicionar qualificação                        | descrever o item                                                                                                       | Alta       |
| Avaliação | H07 | Oficial  | preencher nota                                | avaliar o item de qualificação                                                                                         | Média      |
| Avaliação | H08 | Oficial  | preencher comentários                         | que tenha uma maior clareza da pontuação                                                                               | Média      |
| Avaliação | H09 | Oficial  | ver o status do item de checklist             | que seja evidenciado a falta, ou não, do comentário do paciente com avaliação "não conforme" e "parcialmente conforme" | Baixa      |
| Avaliação | H10 | Oficial  | pontuar os itens do checklist                 | compor a nota das áreas                                                                                                | Alta       |
| Avaliação | H11 | Oficial  | alterar pontuação                             | que possa dar uma pontuação diferente da nota padrão de acordo com o critério do avaliador                             | Baixa      |
| Avaliação | H12 | Oficial  | gerenciar as avaliações                       | que o controle das avaliações seja possível                                                                            | Média      |
| Homepage  | H13 | Oficial  | gerenciar contas                              | que tenha um controle dos soldados                                                                                     | Alta       |
| Hash      | H14 | Oficial  | receber o código da avaliação via _e-mail_    | que consiga pesquisar a avaliação                                                                                      | Baixa      |
| Hash      | H15 | Oficial  | utilizar o código da avaliação                | que consiga preencher os dados                                                                                         | Alta       |
| Relatório | H16 | Oficial  | visualizar os gráficos da avaliação           | que possa avaliar e oficializar o documento                                                                            | Média      |
| Homepage  | H17 | Oficial  | filtrar avaliações                            | que haja facilidade para encontrar as avaliações, quando necessário                                                    | Média      |
| Relatório | H18 | Oficial  | gerar o relatório                             | que possa entregar ao cliente                                                                                          | Alta       |
| Login     | H19 | Soldado  | realizar login                                | que tenha acesso ao menu principal                                                                                     | Alta       |
| Login     | H20 | Soldado  | editar login                                  | que possa realizar modificações no _username_ e na senha, caso os esqueça                                              | Média      |
| Avaliação | H21 | Soldado  | iniciar novas avaliações                      | que consiga certificar um hospital                                                                                     | Alta       |
| Avaliação | H22 | Soldado  | preencher avaliação                           | avaliar o item                                                                                                         | Média      |
| Hash      | H23 | Soldado  | utilizar código da avaliação                  | que consiga preencher os dados                                                                                         | Alta       |
| Avaliação | H24 | Soldado  | adicionar comentários                         | que tenha uma maior clareza da pontuação                                                                               | Média      |
| Avaliação | H25 | Soldado  | pontuar os itens do checklist                 | compor a nota das áreas                                                                                                | Alta       |
| Avaliação | H26 | Soldado  | alterar pontuação                             | que possa dar uma pontuação diferente da nota padrão de acordo com o critério do avaliador                             | Baixa      |
| Homepage  | H27 | Soldado  | requisitar para o Oficial alterações da conta | que tenha um melhor acesso à conta                                                                                     | Baixa      |
| Hash      | H28 | Soldado  | receber o código da avaliação via _e-mail_    | que tenha acesso à avaliação                                                                                           | Baixa      |
| Relatório | H29 | Soldado  | gerar o relatório                             | que possa entregar ao cliente                                                                                          | Alta       |
| Homepage  | H30 | Soldado  | filtrar avaliações                            | que haja facilidade para encontrar as avaliações, quando necessário                                                    | Média      |
| Avaliação | H31 | Soldado  | status da avaliação                           | que seja evidenciado a falta, ou não, do comentário do paciente com avaliação "não conforme" e "parcialmente conforme" | Baixa      |
