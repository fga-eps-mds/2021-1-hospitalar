# Termo de Abertura de Projeto

## Histórico de versões

|    Data    | Versão |            Modificação             |                      Autor                      |
| :--------: | :----: | :--------------------------------: | :---------------------------------------------: |
| 16/08/2021 |  0.1   | Documento elaborado no google docs | @klyssmannoliveira, @victordscabral e @gpersijn |
| 07/09/2021 |  0.2   |         Revisão e correção         |               @klyssmannoliveira                |

## 1. Introdução

O presente documento tem como objetivo informar os propósitos, objetivos e requisitos de alto nível para o processamento de melhoria da saúde assistencial do setor militar.
Além disso, apresenta uma visão inicial do projeto de certificação hospitalar.

## 2. Descrição

A FAM (Ferramenta de Acreditação Militar) tem como principal intuito auxiliar a avaliação de acreditação da saúde
assistencial militar. Desta forma, o projeto consiste em uma página na web que reunirá todas
as informações e análises dos avaliadores, bem como a apresentação dos resultados da avaliação
hospitalar. Preliminarmente, o site desprende-se de uma tela de login para os avaliadores,
da qual dá acesso a um menu principal que abarca, dentre as opções, um checklist hospitalar,
onde possui todos os critérios qualitativos para a realização da avaliação, de uma forma mais
dinâmica e facilitadora. Além disso, possui uma área para a efetivação de comentários explicativos
para o desfecho de cada nota atribuída. Por fim, a página gera um relatório com todos os resultados
obtidos após o processo avaliativo, com a demonstração através de gráficos e relatórios conclusivos.

## 3. Propósito e Justificativa

O processo de Acreditação compreende três tipos de avaliação: diagnóstico, acompanhamento e acreditação.
A Avaliação de Diagnóstico tem caráter educativo e diagnóstico nos processos de melhoria contínua da saúde
assistencial militar na OMS - Organização Militar de Saúde. Assim, busca reforçar a cultura de Segurança do
Paciente, identificar os pontos fortes e as oportunidades de melhoria, promover a cooperação interna entre as
pessoas e entre os processos, e complementar a capacitação dos novos avaliadores. A Avaliação de Acompanhamento
verifica como a OMS desenvolve a saúde assistencial militar com base nos relatórios de avaliação anteriores.
Tais critérios têm por objetivo identificar os pontos fortes e as oportunidades de melhoria, complementar a
capacitação dos novos avaliadores, atualizar a governança de saúde e sincronizar os esforços de minimização das
não-conformidades. A Avaliação de Acreditação verifica o nível de compliance da OMS segundo parâmetros da
ASAM - Acreditação de Saúde Assistencial Militar, atribuindo uma certificação correspondente aos resultados adquiridos.

## 4. Objetivos

O principal objetivo da Ferramenta de Acreditação Militar (FAM) é facilitar o preenchimento e armazenamento das avaliações coletadas
pelos analistas. Além disso, busca-se automatização da geração do relatório e modernização do preenchimento,
como também a demonstração em gráficos, apresentado em um sistema web e integrado, evitando a quantidade excessiva
de arquivos em um único computador. Ademais, tem-se por finalidade, a compactação do processo de avaliação através
do melhor armazenamento dos dados, a padronização dos relatórios, unificação da metodologia e tecnologia e a
diminuição de riscos de perda de dados.

## 5. Requisitos de Alto Nível

Estão entre os requisitos de alto nível:

- Deve ser apresentado em uma plataforma web;
- Tela inicial com login e senha, bem como, usuários com níveis de acesso (analista, administrador e etc);
- Reproduzir, em uma página web, o preenchimento do checklist, com a divisão da página em tópicos de avaliação e seus itens.
  Exibindo demonstrações gráficas conforme é realizado atualmente;
- Interação através de linguagem natural para uma melhor usabilidade;
- Gerar um relatório em diferentes formatos (pdf, .doc e etc) nos moldes do relatório que é utilizado atualmente;

## 6. Riscos

| **Risco**                                                                                                      | **Ação Preventiva**                                                                                                                                       | **Ação Reativa**                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desistência da disciplina                                                                                      | Estimular a máxima participação dos membros da equipe                                                                                                     | Redistribuir tarefas de forma que não ocorra sobrecarga para nenhum dos membros do grupo e que o grupo consiga interagir da melhor maneira possível. |
| Divergência de horários entre membros da equipe                                                                | Elaboração de quadro de horários disponíveis da cada membro da equipe                                                                                     | Planejamento de de pareamento por sprint baseado na disponibilidade dos integrantes por meio do quadro de disponibilidade.                           |
| Alteração do escopo                                                                                            | Documentar e refinar de forma constante os requisitos                                                                                                     | Planejar corretamente a sprint e se manter atualizado quanto às novas funcionalidades que serão adicionadas à página web                             |
| Dificuldades da equipe com as novas tecnologias inseridas                                                      | Seleção de alunos experientes para aplicação de treinamento.                                                                                              | Realização de treinamento sobre tecnologias                                                                                                          |
| Ausência ou instabilidade da energia elétrica / Problemas com a Internet ou com o funcionamento do computador. | Conferir, de forma prévia às reuniões e entregas, o nível de estabilidade da conexão via Internet. Evitar, se possível, ficar longe do roteador de sinal. | Em caso de ausência inesperada de energia, remarcar o compromisso e avisar imediatamente ao time.                                                    |
| Pandemia                                                                                                       | Seguir as orientações da Organização Mundial da Saúde para a prevenção da COVID-19                                                                        | Em caso de infecção ou luto, redistribuir a função do envolvido para não sobrecarregá-lo respeitando seu tempo de recuperação.                       |

## 7. Estimativa de Custo

### 7.1 Custo de aquisição

| **Equipamento**  | **Quantidade**                 | **Finalidade**                 | **Valor unitário** | **Preço** |
| ---------------- | ------------------------------ | ------------------------------ | ------------------ | --------- |
| Notebooks        | 19 unidades                    | Desenvolvimento e planejamento | R$ 3.000           |           |
| Energia elétrica | 5 horas por semana cada membro | Desenvolvimento e planejamento | 0,728 \* R$/KWh    | R$ 107,89 |
| Internet         | 3 meses                        | Desenvolvimento e planejamento | R$ 100 \*\*        | R$ 300    |

\* Fonte: http://www.aneel.gov.br/ranking-das-tarifas, acesso: 07/08/2021 <br>
\*\* Valor médio de um plano de internet na região do DF

### 7.2 Custo de Ferramentas

| **Ferramenta**         | **Finalidade**                              | **Preço tota** |
| ---------------------- | ------------------------------------------- | -------------- |
| Telegram               | Comunicação entre os membros                | R$ 0           |
| Discord                | Comunicação entre os membros                | R$ 0           |
| Editor de Texto        | Elaboração de documentos e código           | R$ 0           |
| Git e GitHub           | Versionamento de arquivos                   | R$ 0           |
| Google Drive           | Compartilhamento de arquivos                | R$ 0           |
| Linux                  | Ambiente de desenvolvimento                 | R$ 0           |
| React, Django, MongoDB | Tecnologias utilizadas para desenvolvimento | R$ 0           |

### 7.3 Custo total

| **Custo**   | **Valor total** |
| ----------- | --------------- |
| Aquisição   | R$ 57407,89     |
| Ferramentas | R$0             |

## 8. Partes Interessadas

### 8.1. Usuários

Os usuários serão os avaliadores de cada área do processo de avaliação de saúde assistencial militar na Organização Militar de Saúde, sendo credenciados pelo Exército a exercerem tais funções.

### 8.2. Hospitais Militares

São aqueles que terão as suas dependências hospitalares avaliadas durante o processo. Os hospitais participam como os principais destinos dos avaliadores credenciados. Há em torno de 31 hospitais militares que integram o setor Militar.

### 8.3. Equipe

A equipe é composta por graduandos dos cursos de Engenharia de Produto de Software - Metodologias de Desenvolvimento de Software - MDS
| **Nome** | **Papel** | **Email** |
|:-:|:-:|:-:|
| ------ | Time A | ------ |
| Klyssmann Henrique Ferreira de Oliveira | Product Owner | klyssmannoliveira@gmail.com |
| Victor de Souza Cabral | Scrum Master | victorcabral2501@gmail.com |
| Pedro Helias Carlos | Arquiteto | pedrohelias95@hotmail.com |
| Eduardo Gurgel Pereira de Carvalho | DevOps | eduardo-gurgel@hotmail.com |
| Pedro Lucas Cassiano Martins | Tecnologia | pcassianomartins@gmail.com
| João Vitor de Souza Durco | Tecnologia | joaodurco@gmail.com|
| ------ | Time B | ------ |
| Gustave Augusto Persijn | Product Owner | gpersijn@outlook.com |
| Adrian Soares Lopes | Scrum Master | adriansoareslps@gmail.com |
| Magno Luiz Vale Vieira | Arquiteto | magnluiz@gmail.com |
| Ricardo de Castro Loureiro | DevOps | ricardoloureiro75@gmail.com |
| Augusto Durães Camargo | Tecnologia | augusto.duraes33@gmail.com |
| Eduardo Rodrigues de Farias | Tecnologia | eduardo.rfarias@outlook.com |
| Daniel Vinicius Ribeiro Alves | Tecnologia | danielribeiroalves0@gmail.com |
| ------ | Time C | ------ |
| Pedro Henrique Caldeira de Moraes | Product Owner | phcmoraes39@gmail.com |
| Pedro Henrique de Deus Vieira | Scrum Master | pedrophdv@outlook.com |
| Gabriel Luiz de Souza Gomes | Arquiteto | gabriel.luiz77888@gmail.com |
| Thiago Vivan Bastos | DevOps | thiago-vivanfsa@hotmail.com |
| Igor Thiago Lima de Santana | Tecnologia | igortls20@gmail.com |
| Bruno Oliveira Lima | Tecnologia | ratesnegro@gmail.com |

## 9. Referências

FRANÇA, Diego; SCONETTO, João; MENDES, Mariana; ARNAUD, Victor. Dr. Down - Termo de Abertura de Projeto. Disponível em: https://fga-eps-mds.github.io/2018.1-Dr-Down/eps/TAP/. Acesso em 7 de agosto de 2021 às 19:55.

EGEWARTH, Eliseu; EGEWARTH, João; GAMA, Gabriela; ALVES, Isaque. Dulce - Termo de Abertura de Projeto. Disponível em: https://github.com/fga-eps-mds/2017.1-Trezentos/wiki/Termo-de-Abertura-do-Projeto. Acesso em 7 de agosto de 2021 às 19:55.

AUGUSTO,Guilherme; OLIVEIRA, Ícaro; SOUZA, Letícia. Lino, o bot - Termo de Abertura de Projeto. Disponível em: https://botlino.github.io/docs/doc-tap. Acesso em 7 de agosto de 2021 às 19:55.
