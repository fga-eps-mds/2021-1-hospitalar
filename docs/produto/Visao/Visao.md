# Documento de visão

## Histórico de versão

|    Data    | Versão |                     Modificação                     |       Autor        |
| :--------: | :----: | :-------------------------------------------------: | :----------------: |
| 18/08/2021 |  0.1   |       Criação da primeira versão do documento       |     @gpersijn      |
| 20/08/2021 |  0.2   |             Introdução e Posicionamento             |      @Swamptg      |
| 22/08/2021 |  0.3   |               Visão geral do produto                | @klyssmannoliveira |
| 23/08/2021 |  0.4   |                      Usuários                       |      @Swamptg      |
| 24/08/2021 |  0.5   |       Revisão e complementação da Introdução        |     @gpersijn      |
| 24/08/2021 | 0.5.1  | Revisão gramatical e estrutural de todo o documento | @klyssmannoliveira |
| 28/08/2021 |  0.6   |    Restrições, Precedência e Padrões aplicáveis     |      @Swamptg      |
| 29/08/2021 |  0.7   |       Principais Recursos e outros requisitos       |     @gpersijn      |
| 31/08/2021 |  0.8   |           Restrições, Faixas de Qualidade           |      @Swamptg      |
| 31/08/2021 |  0.9   |  Revisão e Complementação de Requisitos e Recursos  |     @gpersijn      |
| 12/09/2021 |  1.0   |                Revisão do documento                 | @klyssmannoliveira |

---

## 1. Introdução

Este documento proporciona a visão geral do produto, trazendo as noções essenciais dos problemas, requisistos de soulução e as principais demandas e concepções absorvidas do cliente, de forma que o entendimento do projeto seja entendido de forma alinhada e única para todos os membros envolvidos na elaboração da mesma.

### 1.1. Propósito:

<!--Determina o propósito deste documento de visão.-->

A partir deste documento, conseguimos traçar uma visão geral do produto desenvolvido, que irá guiar todo o seu desenvolvimento até o final do ciclo de vida do produto. Este documento poderá ser modificado e evoluído durante o desenvolvimento do produto, abarcando novas visões que antes não haviam sido identificadas, englobando novas necessidades e adquirindo valor ao produto. É da finalidade do documento estabelecer expectativas concretas, como uma potencial ferramenta para redução de riscos no desenvolvimento do projeto.

### 1.2. Escopo:

<!--Descreve brevemente o escopo deste documento de visão, incluindo a quais programas, projetos, aplicativos e processos de negócios o documento está associado. Inclui qualquer outra coisa que este documento afete ou influencie.-->

Está relacionado ao software desenvolvido e que se encontra, em sua totalidade, nesse [repositório](https://github.com/fga-eps-mds/2021-1-hospitalar). Trata-se de estruturar o produto de uma ferramenta web de checklist e gestão de relatórios para o auxílio do proceso de Acreditação hospitalar, baseado no modelo de avaliação das Organizações Militares de Saúde. A acreditação é o processo de avaliação dessas Organizações com base em critérios de Gestão Organizacional, Segurança do Paciente, Atenção ao Paciente, Diagnóstico e Terapêutica, Apoio Técnico e Logístico e Excelência em Gestão. O principal objetivo desse Processo é a melhoria da Segurança do Paciente segundo parâmetros do PASAM.

### 1.3. Definições, Acrônimos e Abreviações:

<!-- Essas informações podem ser fornecidas por referência ao glossário do projeto, que pode ser desenvolvido online no repositório do RM. A medida que formos utilizando, acrescentamos aqui.-->

| Acrônimos/Abreviações | Significado                                                                                                                                                                                                                                                                                                                            |
| :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Acreditação           | É o processo por meio do qual uma equipe experiente e multi-disciplinar de avaliadores, conhecedora dos protocolos em saúde e sem vínculo com a OMS avaliada, verifica o cumprimento de leis, normas, protocolos e padrões definidos para garantir a segurança de pacientes e colaboradores e a qualidade do atendimento assistencial. |
| OMS                   | Organização Militar de Saúde.                                                                                                                                                                                                                                                                                                          |
| PASAM                 | Programa de Acreditação da Saúde Assistencial Militar.                                                                                                                                                                                                                                                                                 |
| Stakeholders          | São as partes que afetam e são afetadas pelo projeto como os avaliadores, hospitais militares e a OMS.                                                                                                                                                                                                                                 |

### 1.4. Referências:

<!-- Lista todos os documentos aos quais o documento de visão faz referência. Identifique cada documento por título, número de relatório (se aplicável), data e organização de publicação-->

- Modelo Base e Descrições dos itens. **[https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html](https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html).**
  _Acesso em 08 de Agosto de 2021_

### 1.5. Visão Geral:

<!--Descreve conteúdo e organização-->

O presente documento dispõe de informações imprescindíveis acerca dos usuários, escopos, referências e stakeholders, além do posicionamento na forma contextualizada do problema. Em uma primeira instância, serão apresentados as oportunidades de negócios e as instruções tanto do problema quanto de posição do produto. Posteriormente, as partes interessadas serão descritas estabelecendo suas respectivas relações com o Software em questão. A visão geral do produto será apontada através de um resumo explicativo, como também a demonstração de custos, dependências e perspectivas. Em seguida, será apresentado detalhes sobre os recursos e restrições, além de uma análise de caráter qualitativo. Por fim, serão demonstradas as últimas considerações do produto tanto quanto as definições das procedências e prioridades, além de outros requisitos.

## 2. Posicionando

### 2.1. Oportunidade de Negócios:

A partir dos procedimentos e documentos que foram disponibilizados pela PASAM, foi percebida a necessidade de modernização do processo de Acreditação, utilizando ferramentas web para facilitar o trabalho, no lugar das planilhas pouco didáticas e da gestão manual dos arquivos.

### 2.2. Instrução do Problema:

<!-- O problema de (descreva o problema) afeta (as partes interessadas afetadas pelo problema). O impacto do problema é (qual é o impacto do problema). Uma solução bem sucedida incluiria (lista alguns principais benefícios de uma solução bem sucedida). -->

O problema do processo engessado de acreditação afeta os hospitais, os militares e outros técnicos envolvidos. O impacto do problema é a falta de eficiência e insegurança no processo de acreditação dos hospitais. Uma solução bem sucedida incluiria uma maior rapidez e eficiência na avaliação dos hospitais, possibilitando uma resposta melhor aos hospitais e a facilitação tanto da gerência do processo de Acreditação, quanto dos avalidadores técnicos dos hospitais.

### 2.3. Instrução de Posição do Produto:

<!-- Para o (cliente alvo) quem (instrução da necessidade ou oportunidade). O (nome do produto) é uma (categoria do produto) que (instrução do principal benefício, isto é, o motivo convincente para comprar). De outro modo (principal alternativa competitiva), nosso produto (instrução da principal diferenciação). -->

- Para os hospitais que são avaliados: A Ferramenta de Acreditação Militar <!-- Inserir o nome do projeto. Precisamos Definir!!  --> é uma Aplicação Web <!-- Termo bom? --> que tornará mais prática e eficiente a obtenção do relatório para conseguir melhorias internas.

- Para os técnicos que avaliam os hospitais: A Ferramenta de Acreditação Militar<!-- Inserir o nome do projeto. Precisamos Definir!!  --> é uma Aplicação Web <!-- Termo bom? --> que facilitará o processo de avaliação, tornando-o de fácil entendimento e preenchimento.

- Para o gerente que coordena as equipes: A Ferramenta de Acreditação Militar<!-- Inserir o nome do projeto. Precisamos Definir!!  --> é uma Aplicação Web <!-- Termo bom? --> que auxiliará na visualização dos relatórios, assim como na atualização dos quesitos de avaliação e na criação de novas avaliações.

## 3. Usuários e Interessados

<!-- Você deve também identificar os usuários do sistema e assegurar que a comunidade das partes interessadas os represente adequadamente. -->
<!--  identifica os principais problemas que as partes interessadas e os usuários consideram que a solução proposta deva tratar. Esta seção não descreve as solicitações ou requisitos específicos. -->

O principal interessado pelo produto final (relatório) do processo de checklist são as OMS que poderão utilizá-lo para melhorar seus processos e materiais, atendendo melhor os pacientes e garantindo qualidade.
Os principais usuários serão os avaliadores no processo de Acreditação, que irão preencher os checklists e avaliar cada item, e o gerente das equipes de acreditação que irá criar novas solicitações de avaliações e gerenciar os requisitos do checklist. Os avaliadores do PASAM serão militares da ativa ou da reserva remunerada, integrantes ou não do Serviço de Saúde, e servidores civis.

### 3.1. Resumo da Parte Interessada:

<!--
- Nome: Nome do tipo da parte interessada.
- Representa: Descreve brevemente quais pessoas, equipes ou organizações esse tipo de parte interessada representa.
- Função: Descreve brevemente a função que esse tipo de parte interessada desempenha no esforço de desenvolvimento.
-->

| Nome                         | Representa                                                                         | Função                                                                                           |
| :--------------------------- | :--------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| PASAM                        | Projeto que coordena os processos de acreditação dentro das instituições militares | Realizar avaliações a partir das solicitações das OMS                                            |
| Organização Militar de Saúde | Instituição ligada aos cuidados em saúde, pertencente a uma instituição militar    | Aceitar os requisitos do relatório e auxiliar o processo de avaliação para obtenção do relatório |
| Hospitais Militares          | Estabelecimentos dos quais serão locais de avaliação no processo de Acreditação    | Ter suas dependências avaliadas                                                                  |

### 3.2. Resumo do Usuário:

<!--
- Nome: Nome do tipo de usuário.
- Descrição: Descreve brevemente o relacionamento desse tipo de usuário com o sistema que está em desenvolvimento.
- Parte Interessada: Lista qual tipo de parte interessada representa esse tipo de usuário.
-->

| Nome      | Descrição                                                                                                                                                                                          | Parte Interessada |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------- |
| Avaliador | Terá conta no sistema para acessar processos de Acreditação específicos e preencher os itens de avaliação, visitando a OMS que solicitou o processo                                                | PASAM             |
| Gerente   | Criar processos de Acreditação a partir das solicitações, Alterar requisitos da avaliação, cadastrar avaliadores, verificar dados dos relatórios, auxiliar as OMS sobre os resultados do relatório | PASAM             |

### 3.3. Ambiente do Usuário

<!--
- Quantas pessoas estão envolvidas na conclusão da tarefa? Está sendo alterado?
- Quanto tempo leva um loop de tarefa? Quanto tempo os usuários gastam em cada atividade? Está sendo alterado?
- Quais restrições de ambiente exclusivas afetam o projeto? Por exemplo, os usuários requerem dispositivos remotos, trabalham externamente ou trabalham durante as viagens?
- Quais plataformas de sistema estão em uso atualmente? Existem plataformas futuras planejadas?
- Que outros aplicativos estão em uso? Seu aplicativo precisa se integrar a eles?
-->

- Quantidade de pessoas: Pode haver um avaliador para cada tópico de avaliação, sendo: Gestão Organizacional, Segurança do Paciente, Atenção ao Paciente, Diagnóstico e Terapêutica, Apoio Técnico e Logístico e Excelência em Gestão. Portanto, para cada processo existem por volta de 6 usuários para cada processo e 1 usuário administrador, que seria o gerente das equipes. <!-- Podem haver processos paralelos acontecendo?  1 avaliador por item de avaliação? -->

- Tempo: O processo, atualmente, desde o pedido de avaliação até a concretização do relatório dura entre 12 e 18 semanas. A avaliação e o checklist em si dura 1 semana. **Referência da PASAM:** [Apêndice 1](##11-apendice-1-cronograma-de-acreditacao).
  Por ser um cronograma interno da organização, provavelmente não será alterado.

- Restrições de ambiente: Os avaliadores devem se deslocar à OMS para realizar os procedimentos e verificações. Portanto, estão sujeitos ao equipamento disponibilizado pela instituição e aos materiais que podem ser levados por eles. Deve ser possível o preenchimento do checklist de forma offline.

- Aplicativos em uso: É utilizado o Excel para o mantenimento e preenchimento das planilhas de checklist e o Microsoft Word para a edição do Relatórios<!--Correto?-->. O objetivo é suplantar esse uso através da plataforma web, unificando em única plataforma, todo o processo.

### 3.4. Perfis das partes interessadas:

<!--
- Descrição: Descreve brevemente o tipo de parte interessada.
- Tipo: qualidade de conhecimento da parte interessada, como "guru", "especialista de negócios" ou "usuário informal." Essa designação pode sugerir a experiência técnica e o grau de sofisticação.
- Responsabilidades: Lista as principais responsabilidades da parte interessada no sistema em desenvolvimento; lista seus interesses como uma parte interessada.
- Critérios de Sucesso: Determina como a parte interessada define o sucesso. Como a parte interessada é recompensada?
- Envolvimento - Descreve como a parte interessada está envolvida no projeto. Onde possível, relate o envolvimento nas funções do processo; por exemplo, uma parte interessada pode ser um revisor de requisitos.
- Entregas: Identifica as entregas adicionais que a parte interessada requer. Esses itens podem ser entregas do projeto ou saída a partir do sistema em desenvolvimento.
- Comentários ou Problemas: Determina os problemas que interferem com o sucesso e quaisquer outras informações relevantes.
-->

#### 3.4.1. PASAM:

- Descrição: É a organização que aplicará o software no processo de Acreditação e realizará as avaliações das OMS.

- Tipo: Usuário direto e cliente do projeto. Conhecem a fundo o funcionamento e processos.

- Responsabilidades: É o grupo que irá gerenciar todo o processo. Iniciam e realizam acreditação através dos membros de suas equipes.

- Critérios de Sucesso: Plataforma unificada para todas as etapas de avaliação das OMS, inclusive para o armazenamento e edição, tanto dos relatórios feitos quanto do modelo de relatório a ser gerado.

- Envolvimento: Aprovar o software, dar feedback.

- Entregas: O Produto Mínimo Viável em si, que será utilizado para futuramente ser o software principal de trabalho por seus membros e servidores. Isso inclui todos os módulos do software, como o check-list e a página de gerenciamento.

#### 3.4.2. OMS:

- Descrição: Organização que sofrerá a avaliação com o objetivo de obter mehlorias internas e garantir a segurança do paciente.

- Tipo: Solicitador do serviço. Cliente indireto do software.

- Responsabilidades: Solicitar a acreditação. Auxiliar os avaliadores, fornecendo documentos, mostrando seu quadro de funcionários, seus procedimentos, seus espaços e suas sub-organizações.

- Critérios de Sucesso: Recebimento de Relatório sucinto e didático sobre seu resultados em qualidade e segurança do paciente, o que é de excelência e o que precisa de melhorias.

- Envolvimento: Envolvimento indireto com o projeto.

- Entregas: Relatório.

### 3.5. Perfis do Usuário:

<!--
- Representante: Indica quem representa o usuário para o projeto. (Essa informação será opcional se estiver documentada em algum outro lugar.) Esse representante, geralmente refere-se à parte interessada que representa o conjunto de usuários; por exemplo, Parte Interessada: Parte Interessada1.
- Descrição: Descreve brevemente o tipo de usuário.
- Tipo: qualidade de conhecimento do usuário, como "guru" ou "usuário informal". Essa designação pode sugerir a experiência técnica e o grau de sofisticação.
Responsabilidades: Lista as principais responsabilidades do usuário com respeito ao sistema; por exemplo, determina quem captura os detalhes do cliente, produz relatórios e coordena trabalho, etc.
- Critérios de Sucesso: Determina como o usuário define o sucesso. Como o usuário é recompensado?
- Envolvimento: Descreve como o usuário está envolvido no projeto. Onde possível, relate o envolvimento nas funções do processo; por exemplo, uma parte interessada pode ser um revisor de requisitos.
- Entregas: Identifica as entregas que o usuário produz e para quem.
- Comentários ou Problemas: Determina os problemas que interferem com o sucesso e quaisquer outras informações relevantes. Descreve as tendências que tornam a tarefa do usuário mais fácil ou mais difícil.
-->

#### 3.5.1. Avaliador:

- Representante: PASAM.

- Descrição: Oficial militar ou servidor civil integrante da PASAM que avalia documentações da OMS e vai in-loco realizar a avaliação da instituição.

- Tipo: Especialista técnico em um dos escopos de avaliação. Preenchedor da avaliação.

- Responsabilidades: Averiguar os itens de avaliação. Atribuir nota para seu escopo de avaliação com base nos itens do check-list. Comentar, obrigatoriamente os itens que obtiveram notas menores e o porquê.

- Critérios de Sucesso: Check-list dinâmico e de fácil preenchimento. Formulário salvo localmente e on-line. Compartilhamento de informações facilitado.

- Envolvimento: Feedback sobre as funcionalidades.

- Entregas: Avaliação com as notas e comentários que estarão no relatório.

- Comentários ou Problemas: Determinar corretamente os requisitos de conectividade.

#### 3.5.2. Administrador:

- Representante: PASAM.

- Descrição: Gerencia o início do processo de acreditação e suas entregas.

- Tipo: Administrador. Gerente do processo.

- Responsabilidades: Coordenação das avaliações, abertura, cadastro de avaliadores, edição dos itens e critérios avaliativos, visualização e impressão dos relatórios e seus respectivos dados (gráficos, tabelas...).

- Critérios de Sucesso: Facilitação do gerenciamento dos processos de Acreditação, suas equipes e avaliadores. Bem como dos relatórios já feitos e de seu itens e critérios.

- Envolvimento: Feedback sobre as funcionalidades.

- Entregas: Entrega dos relatórios para serem preenchidos e para as OMS, após finalização.

- Comentários ou Problemas: Detalhar melhor dados a serem explorados para a construção dos gráficos. Terá um contato mais próximo com o banco de dados.

### 3.6. Principais necessidades:

<!--
- Quais são os motivos para esse problema?
- Como o problema é resolvido agora?
- Quais soluções a parte interessada deseja?
-->

|                 **Necessidade**                  |                   **Prioridade**                    | **Interesses** |                           **Solução Atual**                            |                                        **Solução Proposta**                                        |
| :----------------------------------------------: | :-------------------------------------------------: | :------------: | :--------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| Processo mais ágil e seguro de avaliação das OMS | É a parte essencial na Acreditação das Instituições |                | Utilização de planilhas pouco intuitivas e edição manual de relatórios | Página web unificando todo o processo de avaliação e geração do relatório, de forma mais intuitiva |

### 3.7. Concorrência:

Por ser um software com objetivo específico e nichado, não foi verificada concorrência relevante. Os únicos softwares identificados são os auxiliares ao processo que atualmente são utilizados, como as ferramentas do pacote Microsoft Office para edição de textos e planilhas, mas que não endereçam especificamente o problema da Acreditação.

## 4. Visão Geral do Produto

### 4.1. Perspectiva do Produto:

<!-- Se o produto for independente e totalmente autocontido, indique-o aqui. Se o produto for um componente de um sistema maior, relacione como esses sistemas interagem -->

A Ferramenta de Acreditação Militar (FAMil) tem como principal objetivo auxiliar a avaliação de acreditação da saúde assistencial militar. Desta forma, o projeto consiste em uma página na web que reunirá todas as informações e análises dos avaliadores, bem como a apresentação dos resultados da avaliação hospitalar. O mecanismo de avaliação atual sedá por meio de planilhas armazenadas em computadores, assim, o produto se destaca pela facilidade de armazenamento das informações em uma página web sem a necessidade de armazenar várias versões dos arquivos em um único computador. Desta maneira, a avaliação poderá ser de forma independente para cada avaliador necessitando apenas de um computador com acesso à internet. A Ferramenta de Acreditação Militar (FAMil) também se destaca pela exibição dos gráficos de avaliação do hospital antes da exibição do relatório da análise e pela facilidade no preenchimento dos itens de avaliação bem como a adição e/ou exclusão de novos itens de avaliação e a variabilidade dos pesos da avaliação, caso haja a necessidade demandada usuário.

### 4.2. Resumo das Capacidades:

|                    **Benefício para o Cliente**                     |                                                                                                                    **Recursos de Suporte**                                                                                                                     |
| :-----------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                Facilidade no gerenciamento de versão                |                                                                  A avaliação se apresenta em uma página web podendo ser acessada e manipulada por meio de um computador com acesso à internet                                                                  |
|                 Independência entre os avaliadores                  |                                                               Cada avaliador dispõe de uma conta específica para acessar e atualizar suas avaliações de forma independente dos outros avaladores                                                               |
| Facilidade no preenchimento e modificação do checklist de avaliação | O checklist apresenta um ambiente intuitivo de preenchimento dos itens de avaliação. Além do mais, o usuário que detém o direito de administrador pode adicionar ou remover os itens de avaliação, bem como alterar os pesos das notas conforme for necessário |
|               Visualização dos gráficos de desempenho               |                                                                    O usuário pode visualizar os gráficos de desempenho da avaliação hospitalar antes de gerar o relatório final de análise                                                                     |
|                      Controle dos avaliadores                       |                                              A página web tem níveis de acesso (adminstrador e avaliador). Desta forma, o administrador pode criar, editar ou excluir um avaliador caso haja alteração na equipe                                               |
|                        Avaliações mais ágeis                        |                          Por ser uma plataforma web, o preenchimento é de uma forma independente, ou seja, não há a necessidade do tempo de espera do término de todos os avaliadores para obter uma única versão em um único arquivo                          |
|                     Marcadores de preenchimento                     |                                                                                   O checklist deve alertar o usuário sobre os campos que são obrigatórios durante a análise                                                                                    |

### 4.3. Suposições e Dependências:

<!-- Princípios do projeto e do produto que, se modificados, irão modificar o doc de visão. -->

- O usuário deverá possuir um acesso ao computador com internet;
- A aplicação web facilitará o preenchimento e armazenamento das análises para o credenciamento hospitalar;
- A aplicação web deixará a avaliação mais rápido e menos burocrática;

### 4.4. Custo e Precificação:

<!--  podem ser material para o sucesso dos projetos, ou irrelevantes, dependendo da natureza do aplicativo. -->

Os custos do produto se resume basicamente nos computadores, internet e energia para o seu desenvolvimento. Não haverá custos de ferramentas adicionais pois não serão necessários nenhuma licença ou serviços de terceiros pagos.

## 5. Recursos do Produto

<!-- Lista e descreve brevemente os recursos do produto. Os recursos são capacidades de alto nível do sistema que são necessários para entregar benefícios aos usuários. -->
<!-- Em toda esta seção, torne cada recurso relevante para usuários, operadores ou outros sistemas externos. Inclua uma descrição de funções e problemas de usabilidade que devem ser tratados. As seguintes diretrizes se aplicam:
Evite design. Mantenha as descrições do recurso em um nível geral. Foque nas capacidades necessárias e por que (não como) elas devem ser implementadas.
Designe todos os recursos como requisitos de um tipo de recurso específico para fácil referência e rastreamento. -->
<!--
Utilizar o backlog como referência e dar novas ideias para o backlog.-->

| Recursos                      | Descrição                                                                                                                                                                         |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Acesso à distância            | O sistema deve ser capaz de ser acessado à distância via plataforma web para que os avaliadores possam ir aos hospitais                                                           |
| Controle de Cadastro          | Os militares credenciados poderão acessar a um menu principal através de um controle de acesso fornecido por uma tela de login.                                                   |
| Funções Administrativas       | O usuário (Administrador) terá controle no cadastro dos outros usuários, como também poderá editar, remover ou criar novas avaliações.                                            |
| Tabela de avaliação           | Os usuários designados a realizar as avaliações serão capazes de realizar as devidas ponderações em uma tabela de checklist.                                                      |
| Relatório em PDF              | Um relatório em formato PDF será capaz de descrever e representar os dados obtidos da tabela avaliativa.                                                                          |
| Status do item                | Representação instantânea da condição de cada item da tabela. O usuário consegue ver as pendências através de um sistema de cores que representa cada status.                     |
| Pontuação do Checklist        | Há um campo reservado para o preenchimento de uma pontuação nivelada de acordo com os critérios das notas pré-estabelecidas para cada item.                                       |
| Identificação de itens        | Cada item será definido por um índice que consiste em uma '#' acompanhada da letra que representaa área que será avaliada e um número colocado de acordo com uma ordem crescente. |
| Sistema de comentários        | As observações e descrições da nota indicada podem ser explicadas na aba reservada para comentários.                                                                              |
| Sistema Gerador de Avaliações | O usuário pode iniciar uma nova avaliação da qual recebe um novo código respectivo ao hospital indicado.                                                                          |

## 6. Restrições

<!-- Observe todas as restrições de design, restrições externas, como requisitos operacionais ou regulamentares) ou outras dependências. -->

- O software deve ser acessível via plataforma web para envio remoto dos relatórios;
- Deve ser possível preencher e salvar o relatório offline;
- Deve ser possível o acesso de pelo menos 10 pessoas ao mesmo tempo;
- O design deve ser mais intuitivo do que o utilizado anteriormente, explicitando melhor as categorias de preenchimento e os itens;
- o Software deve proteger as informações contidas em seus bancos de dados, podendo somente o administrador visualizá-las;
- O Software deve gerar relatórios em formato PDF;
- O Mínimo Produto Viável deve estar finalizado até o fim da disciplina de MDS ao final de 2021;
- O Software deve ser disponibilizado de forma livre no GitHub;
- Não deve existir custo de produção para ferramentas do projeto;
- O software, em sua totalidade, deve estar disponível para instalação pelo repositório no GitHub;

## 7. Faixas de qualidade

<!-- Requisitos não funcionais -->
<!-- Defina as faixas de qualidade para desempenho, robustez, tolerância a falhas, usabilidade e características similares que o conjunto de recursos não descreve. -->

- Layout intuitivo;
- Melhoria nas descrições dos tópicos de avaliação;
- Notificar presença de erros no preenchimento;
- Notificar presença de erros no relatório;
- Permitir gerencimento simplificado dos requisitos do relatório e dos itens de preenchimento;
- Design valorado e claro com cores que referenciam os militares;
- Pode ser acessado em qualquer sistema operacional;

## 8. Precedência e prioridade

| Ordem | Funcionalidade                              | prioridade |
| :---: | :------------------------------------------ | :--------- |
|   1   | Preenchimento de Checklist                  | Alta       |
|   2   | Salvar o Checklist                          | Alta       |
|   3   | Comentários sobre as avaliações             | Alta       |
|   4   | Gerar o relatório                           | Alta       |
|   5   | Controle de Login                           | Alta       |
|   6   | Gerar gráficos das avaliações               | Média      |
|   7   | Gerenciar as avaliações já feitas/pendentes | Alta       |
|   8   | Editar itens do checklist                   | Baixa      |
|   9   | Verificar Status da avaliação               | Baixa      |
|  10   | Envio de dados de conta por e-mail          | Baixa      |
|  11   | Envio do relatório por e-mail               | Baixa      |

## 9. Outros Requisitos do Produto

### 9.1. Requisitos do Sistema:

<!-- SO suportados, Plataformas, configurações, memória, dispositivos ... -->

O sistema deve ser uma plataforma web, de fácil acessibilidade remota, preferencialmente por algum dos browsers comuns como google chome e firefox. Deve ser compatível com plataformas desktop.

### 9.2. Requisitos de Desempenho:

<!-- Itens como fatores de carga do usuário, largura de banda ou capacidade de comunicação, rendimento, exatidão, confiabilidade ou tempos de resposta  -->

- O sistema deve conseguir suportar o acesso simultâneo de aproximadamente 15 pessoas ao servidor pela página, podendo ser escalado no futuro.
- Deve ser ágil na geração dos documentos e em salvar os relatórios
- A página deve ser leve para poder ser executado em condições não ideais de conexão e em hardwares pouco potentes.

### 9.3. Requisitos Ambientais:

<!-- Condições de uso, ambiente do usuário, disponibilidade do recurso, problemas de manutenção, manipulação de erros e recuperação. -->

- O software deve ser acessível remotamente, sendo protegido por login de usuário.
- Deve ser possível salvar preenchimento de checklists de forma local e offline. [PRIORIDADE BAIXA]
- Enviar os dados salvos ao obter conexão.
- O software deve notificar erros e faltas no preenchimento dos relatórios
- O usuário irá acessar o software via desktop.

## 10. Requisitos de Documentação

<!-- Documentos necessários para o produto. Ex: README, Guias de Uso, Guias de Instalação... -->

### 10.1. Termo de Abertura do Projeto:

Termo que guia os princípios do projeto, os objetivos gerais do projeto, seus membros e propósitos.

### 10.2. Estrutura Analítica do Projeto:

Etrutura do projeto, identificado todas as áreas críticas, grupos e principais componentes.

### 10.3. Readme:

Necessário para guiar pessoas que queiram entender o funcionamento do projeto, contendo a forma de instalar/executar o Software. Muito importante para projetos Open-Source, podendo conquistar novos contribuídores através dele, e divulgar para usuários interessados.

### 10.4. Backlog do Produto:

Trará a especificação de todas as funcionalidades que serão implementadas até a finalização do projeto, indicando para qual o usuário ela servirá e qual a importância da funcionalidade para esse usuário.

### 10.5. Roadmap:

Um guia com as previsões preliminares das etapas de implementação e entregas do projeto.

### 10.6. Arquitetura:

Elucidar de modelo de implementação a ser seguido e as Classes, Métodos e Casos de Uso que exemplificam o funcionamento do Software.

### 10.7. Ferramentas:

Explicíta as ferramentas utilizadas para o projeto, inclusive os FrameWorks de práticas Ágeis.

### 10.8. Sprint Review:

Documento para verificar o rendimento da semana de desenvolvimento , o que foi entregue, o que faltou, quais foram as falhas de produtividade e como melhorá-las

## 11. Padrões Aplicáveis

### 11.1. MVT (Model - View - Template):

Padrão de desenvolvimento web aplicável as ferramentas que foram decididas no Projeto. O escopo de **Model** trata do mapeamento do Banco de Dados para ser utilizado no projeto. A **View** é o retorno de dados do Banco de Dados para o usuário, através de alguma requisição. O **Template** é a forma em que os dados da View serão apresentados.

---

## 12. Apêndice 1 - Cronograma de Acreditação

<table>
<thead>
    <tr>
        <th> Quando </th>
        <th> Atividade </th>
        <th> Comentários </th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>De 6 a 10 semanas antes da avaliação</td>
        <td> Preparação e despacho da Ordem uma OMS, as quais seriam avaliadas na mesma viagem da avaliação. </td>
        <td>O Sv pode incluir mais de uma OMS, as quais seriam avaliadas na mesma viagem da equipe.</td>
    </tr>
    <tr>
        <td>De 4 a 6 semanas antes da avaliação</td>
        <td> Contatis e ajustes administrativos com as pessoas e as organizações envolvidos na avaliação. </td>
        <td> Além dos acertos administrativos previstos, é o tempo também para orientar e acompanhar a preparação das OMS.</td>
    </tr>
    <tr>
        <td>Semana anterior à avaliação</td>
        <td>Verificação da documentação prevista no Anexo C do CO PASAM</td>
        <td>Normalmente se trata de informação de acesso ostensivo, enviada por e-mail. Esta verificação preliminar é normalmente realizada à distância, mas podem ocorrer visitas presenciais para verificação de documentos, caso isso seja necessário e tenha sido devidamente acertado entre a Equipe de Avaliação e a Direção da OMS. Durante a semana de avaliação presencial, as OMS disponibilizam as originais para a equipe do PASAM.</td>
    </tr>
    <tr>
        <td rowspan="7">Semana de Avaliação</td>
        <td>No primeiro dia, é feita uma reunião com as principais lideranças da OMS e quem mais a direção julgar interessante chamar para um primeiro contato com a equipe.</td>
        <td>Nessa oportunidade ocorre uma breve apresentação do Diretor sobre a OMS e uma breve explanação sobre como a equipe conduzirá os trabalhos durante a avaliação</td>
    </tr>
    <tr>
        <td>As atividades diárias subsequentes são precedidas de uma breve reunião com a Direção e as principais lideranças do hospital, em que a equipe discute as principais observações do dia anterior e passa suas impressões aos interessados.</td>
        <td>Esse contato diário com as lideranças é importante para o bom andamento da avaliação. Momento para coordenar as atividades e manter o envolvimento da OMS.</td>
    </tr>
    <tr>
        <td>Durante o período da Avaliação, é disponibilizada sala reservada aos avaliadores, com apoio de TI com computadores, acesso à internet, aplicativo Microsoft Excel e impressora local.</td>
        <td>O aparato serve para a troca de experiências entre os avaliadores e o preenchimento da planilha de avaliação. Na maioria do tempo, os avaliadores estarão percorrendo os setores da OMS relacionados às suas Seções de Avaliação. A sala reservada visa não expor assuntos sensíveis.</td>
    </tr>
    <tr>
        <td>No período da manhã, ocorre a visita aos setores da OMS, acompanhados por integrantes da OMS escalados para tal.</td>
        <td>Os acompanhantes dos avaliadores, também anotam as observações feitas, servem de guia e de testemunha das ações do avaliador. Para tanto, se pede que escalem pessoas que conheçam a OMS e com algum conhecimento sobre os assuntos a serem verificados pelos avaliadores.</td>
    </tr>
    <tr>
        <td>Por ocasião do almoço, a equipe ocupará mesa exclusiva no refeitório para que possa aproveitar aquele horário para discutir e coordenar as atividades do dia.</td>
        <td>Todo momento deve ser aproveitado e no almoço é um dos poucos em que toda a equipe está reunida. A mesa exclusiva é para não expor assuntos sensíveis.</td>
    </tr>
    <tr>
        <td>À tarde, continua a visita aos setores da OMS, sempre acompanhados por integrantes da OMS escalados para tal.</td>
        <td>Toda observação feita corrobora para a avaliação final. Mesmo situações ou eventos não relacionados com a área de determinado avaliador devem ser anotados e informados ao avaliador interessado para que esse último verifique e aprimore sua percepção sobre a OMS.</td>
    </tr>
    <tr>
        <td>No último dia de avaliações, será apresentada uma prévia do Relatório da Avaliação à Direção e às principais lideranças da OMS.</td>
        <td>Nesse momento, todos os avaliadores fazem um breve apanhado do que constataram sobre suas seções de avaliação. Não é o momento para réplicas ou justificativas. Essas intervenções devem ser realizadas pelos interessados durante as visitas, em privado.</td>
    </tr>
    <tr>
        <td> Até o segundo dia após a avaliação </td>
        <td>Entrega das planilhas preenchidas pelos avaliadores.</td>
        <td>Todos os itens a cargo do avaliador precisam estar preenchidos, por isso a planilha acusa quando um item está com lançamento duplo ou em branco, ou ainda quando um Entrega das item parcial ou não conforme não tenha sido comentado. É necessário esmero na redação, para evitar enganos revisões de texto. Acesso Restrito.</td>
    </tr>
    <tr>
        <td> Até o décimo dia útil após a avaliação </td>
        <td>Conclusão do Relatório</td>
        <td>Esse prazo só será possível se as atividades anteriores forem feitas no tempo previsto. É importante finalizar logo o relatório, porque o intervalo entre as avaliações é bem reduzido. O relatório é considerado Material de Acesso Restrito.</td>
    </tr>
    <tr>
        <td> Dias subsequentes </td>
        <td>Despacho e envio do relatório.</td>
        <td>São enviadas cópias do Relatório de Avaliação para a Diretoria de Saúde, Região Militar de vinculação e para a própria OMS.</td>
    </tr>
</tbody>
</table>
