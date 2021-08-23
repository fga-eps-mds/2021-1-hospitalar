
<style>
body {
text-align: justify}
</style>

# Documento de visão

## Histórico de versão

| Data | Versão | Modificação | Autor |
| :-: | :-: | :-: | :-: |
| 18/08/2021 | 0.1 | Criação da primeira versão do documento | @gpersijn |
| 20/08/2021 | 0.2 | Introdução e Posicionamento | @Swamptg |
| 22/08/2021 | 0.3 | Visão geral do produto | @klyssmannoliveira |
---

## 1. Introdução

Apresentamos a visão de produto, trazendo as noções essenciais dos problemas, requisistos de soulução. <!-- estou fazendo uma demonstração para todos os times de como funciona o git-->

### 1.1. Propósito:
<!--Determina o propósito deste documento de visão.-->
A partir deste documento conseguimos traçar uma visão geral do produto desenvolvido, que irá guiar todo o seu desenvolvimento até o final do ciclo de vida do produto. Este documento poderá ser modificado e evoluído durante o desenvolvimento do produto, abarcando novas visões que não haviam sido identificadas no começo e englobado novas necessidades.

### 1.2. Escopo:
<!--Descreve brevemente o escopo deste documento de visão, incluindo a quais programas, projetos, aplicativos e processos de negócios o documento está associado. Inclui qualquer outra coisa que este documento afete ou influencie.-->
Está relacionado ao software desenvolvido e que se encontra, em sua totalidade, nesse [repositório](https://github.com/fga-eps-mds/2021-1-hospitalar). Trata-se de estruturar o produto de uma ferramenta web de checklist e gestão de relatórios para o auxílio do proceso de Acreditação, baseado no modelo de avaliação das Organizações Militares de Saúde. A acreditação é o processo de avaliação dessas Organizações com base em critérios de Gestão Organizacional, Segurança do Paciente, Atenção ao Paciente, Diagnóstico e Terapêutica, Apoio Técnico e Logístico e Excelência em Gestão.

### 1.3. Definições, Acrônimos e Abreviações:
<!-- Essas informações podem ser fornecidas por referência ao glossário do projeto, que pode ser desenvolvido online no repositório do RM. A medida que formos utilizando, acrescentamos aqui.-->

- OMS - Organização Militar de Saúde.
- Acreditação - É o processo por meio do qual uma equipe experiente e multi-disciplinar de avaliadores, conhecedora dos protocolos em saúde e sem vínculo com a OMS avaliada, verifica o cumprimento de leis, normas, protocolos e padrões definidos para garantir a segurança de pacientes e colaboradores e a qualidade do atendimento assistencial.

### 1.4. Referências:
<!-- Lista todos os documentos aos quais o documento de visão faz referência. Identifique cada documento por título, número de relatório (se aplicável), data e organização de publicação-->
- Modelo Base e Descrições dos itens. **[https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html](https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_4.0.6/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.html).**
_Acesso em 08 de Agosto de 2021_


### 1.5. Visão Geral:
<!--Descreve conteúdo e organização-->



## 2. Posicionando

### 2.1. Oportunidade de Negócios:
A partir dos procedimentos e verificações que são realizadas pela PASSAM, foi percebida a necessidade de modernização da Acreditação, utilizando ferramentas web para facilitar o trabalho, no lugar das planilhas pouco didáticas e da gestão manual dos arquivos.

### 2.2. Instrução do Problema:
<!-- O problema de (descreva o problema) afeta (as partes interessadas afetadas pelo problema). O impacto do problema é (qual é o impacto do problema). Uma solução bem sucedida incluiria (lista alguns principais benefícios de uma solução bem sucedida). -->
**O problema do** processo engessado de acreditação **afeta** os hospitais, os militares e outros técnicos envolvidos. **O impacto do problema é** a falta de eficiência e insegurança no processo de acreditação dos hospitais. **Uma solução bem sucedida incluiria** uma maior rapidez e eficiência na avaliação dos hospitais, possibilitando uma resposta melhor aos hospitais e a facilitação tanto da gerência do processo de Acreditação, quanto dos avalidadores técnicos dos hospitais.

### 2.3. Instrução de Posição do Produto:
<!-- Para o (cliente alvo) quem (instrução da necessidade ou oportunidade). O (nome do produto) é uma (categoria do produto) que (instrução do principal benefício, isto é, o motivo convincente para comprar). De outro modo (principal alternativa competitiva), nosso produto (instrução da principal diferenciação). -->

- **Para** os hospitais **que** são avaliados. **O** ?_AcreditaLista_? <!-- Inserir o nome do projeto. Precisamos Definir!!  --> **é uma** Aplicação Web <!-- Termo bom? --> **que** tornará mais prática e eficiente a obtenção do relatório para conseguir melhorias internas.

- **Para** os técnicos **que** avaliam os hospitais. **O** ?_AcreditaLista_?<!-- Inserir o nome do projeto. Precisamos Definir!!  --> **é uma** ?Aplicação Web? <!-- Termo bom? --> **que** facilitará o processo de avaliação, tornando-o de fácil entendimento e preenchimento.

- **Para** o gerente **que** coordena as equipes. **O** ?_AcreditaLista_?<!-- Inserir o nome do projeto. Precisamos Definir!!  --> **é uma** ?Aplicação Web? <!-- Termo bom? --> **que** auxiliará na visualização dos relatórios, assim como na atualização dos quesitos de avaliação e na criação de novas avaliações.



## 3. Usuários e Interessados

<!-- Você deve também identificar os usuários do sistema e assegurar que a comunidade das partes interessadas os represente adequadamente. -->
<!--  identifica os principais problemas que as partes interessadas e os usuários consideram que a solução proposta deva tratar. Esta seção não descreve as solicitações ou requisitos específicos. -->
O principal interessado pelo produto final (relatório) do processo de checklist são as OMS que poderão utilizá-lo para melhorar seus processos e materiais, atendendo melhor os pacientes e garantindo qualidade.
Os principais usuários serão os avaliadores no processo de Acreditação, que irão preencher os checklists e avaliar cada item, e o gerente das equipes de acreditação que irá criar novas solicitações de avaliações e gerenciar os requisitos do checklist.

### 3.1. Resumo da Parte Interessada:
<!--  
- Nome: Nome do tipo da parte interessada.
- Representa: Descreve brevemente quais pessoas, equipes ou organizações esse tipo de parte interessada representa.
- Função: Descreve brevemente a função que esse tipo de parte interessada desempenha no esforço de desenvolvimento.
-->
|Nome|Representa|Função|
| :- | :- | :- |
|PASAM|Projeto que coordena os processos de acreditação dentro das instituições militares|Realizar avaliações apartir das solicitações das OMS|
|Organização Militar de Saúde|Instituição ligada aos cuidados em saúde, pertencente a uma instituição militar|Aceitar os requisitos do relatório e auxiliar o processo de avaliação para obtenção do relatório|

### 3.2. Resumo do Usuário:
<!--  
- Nome: Nome do tipo de usuário.
- Descrição: Descreve brevemente o relacionamento desse tipo de usuário com o sistema que está em desenvolvimento.
- Parte Interessada: Lista qual tipo de parte interessada representa esse tipo de usuário.
-->

|Nome|Descrição|Parte Interessada|
| :- | :- | :- |
|Avaliador|Terá conta no sistema para acessar processos de Acreditação específicos e preencher os itens de avaliação, visitando a OMS que solicitou o processo|PASSAM|
|Gerente|Criar processos de Acreditação a partir das solicitações, Alterar requisitos da avaliação, cadastrar avaliadores, verificar dados dos relatórios, auxiliar as OMS sobre os resultados do relatório|PASSAM|

### 3.3. Ambiente do Usuário
<!-- 
- Quantas pessoas estão envolvidas na conclusão da tarefa? Está sendo alterado?
- Quanto tempo leva um loop de tarefa? Quanto tempo os usuários gastam em cada atividade? Está sendo alterado?
- Quais restrições de ambiente exclusivas afetam o projeto? Por exemplo, os usuários requerem dispositivos remotos, trabalham externamente ou trabalham durante as viagens?
- Quais plataformas de sistema estão em uso atualmente? Existem plataformas futuras planejadas?
- Que outros aplicativos estão em uso? Seu aplicativo precisa se integrar a eles?
-->

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

### 3.6. Principais necessidades:
<!-- 
- Quais são os motivos para esse problema?
- Como o problema é resolvido agora?
- Quais soluções a parte interessada deseja? 
-->

| **Necessidade** | **Prioridade** | **Interesses** | **Solução Atual** | **Solução Proposta** |
| :-: | :-: | :-: | :-: | :-: |
| Texto | Texto | Texto | Texto | Texto |

### 3.7. Concorrência



## 4. Visão Geral do Produto

### 4.1. Perspectiva do Produto:
<!-- Se o produto for independente e totalmente autocontido, indique-o aqui. Se o produto for um componente de um sistema maior, relacione como esses sistemas interagem -->
O Checklist Hospitalar tem como principal intuito auxiliar a avaliação de acreditação da saúde assistencial militar. Desta forma, o projeto consiste em uma página na web que reunirá todas as informações e análises dos avaliadores, bem como a apresentação dos resultados da avaliação hospitalar. O mecanismo de avaliação atual sedá por meio de planilhas armazenadas em computadores, assim, o produto se destaca pela facilidade de armazenamento das informações em uma página web sem a necessidade de armazenar várias versões dos arquivos em um único computador. Desta maneira, a avalação poderá ser de forma independente para cada avaliador necessitando apenas de um computador com acesso à internet. O Checklist Hospitalar também se destaca pela exibição dos gráficos de avaliação do hospital antes da exibição do relatóro da análise e pela facilidade no preenchimento dos itens de avaliação bem como a adição e/ou exclusão de novos itens de avaliação e a variabilidade dos pesos da avaliação, caso haja a necessidade demandada usuário.

### 4.2. Resumo das Capacidades:


| **Benefício para o Cliente** | **Recursos de Suporte** |
| :---: | :---: |
| Facilidade no gerenciamento de versão | A avaliação se apresenta em uma página web podendo ser acessada e manipulada por meio de um computador com acesso à internet |
| Independência entre os avaliadores |  Cada avaliador dispẽ de uma conta específica para acessar e atualizar suas avaliações de forma independente dos outros avaladores |
|  Facilidade no preenchimento e modificação do checklist de avaliação |  O checklist apresenta um ambiente intuitivo de preenchimento dos itens de avaliação. Além do mais, o usuário que detém o direito de administrador pode adicionar ou remover os itens de avaliação, bem como alterar os pesos das notas conforme for necessário |
|  Visualização dos gráficos de desempenho |  O usuário pode visualizar os gráficos de desempenho da avaliação hospitalar antes de gerar o relatório final de análise |
| Controle dos avaliadores  |  A página web tem níveis de acesso (adminstrador e avaliador). Desta forma, o administrador pode criar, editar ou excluir um avaliador caso haja alteração na equipe |
|  Avaliações mais ágeis | Por ser uma plataforma web, o preenchimento é de uma forma independente, ou seja, não há a necessidade do tempo de espera do término de todos os avliadores para obter uma única versão em um único arquivo  |
| Marcadores de preenchimento  |  O checklist deve alertar o usuário sobre os campos que são obrigatórios durante a análise |



### 4.3. Suposições e Dependências
<!-- Princípios do projeto e do produto que, se modificados, irão modificar o doc de visão. -->
- O usuário deverá possuir um acesso ao computador com internet;
- A aplicação web facilitará o preenchimento e armazenamento das análises para o credenciamento hospitalar;
- A aplicação web deixará a avaliação mais rápido e menos burocrática;
### 4.4. Custo e Precificação
<!--  podem ser material para o sucesso dos projetos, ou irrelevantes, dependendo da natureza do aplicativo. -->
Os custos do produto se resume basicamente nos computadores, internet e energia para o seu desenvolvimento. Não haverá custos de ferramentas adicionais pois não serão necessários nenhuma livença ou servços de terceiros pagos.




## 5. Recursos do Produto
<!-- Lista e descreve brevemente os recursos do produto. Os recursos são capacidades de alto nível do sistema que são necessários para entregar benefícios aos usuários. -->
<!-- Em toda esta seção, torne cada recurso relevante para usuários, operadores ou outros sistemas externos. Inclua uma descrição de funções e problemas de usabilidade que devem ser tratados. As seguintes diretrizes se aplicam:
Evite design. Mantenha as descrições do recurso em um nível geral. Foque nas capacidades necessárias e por que (não como) elas devem ser implementadas.
Designe todos os recursos como requisitos de um tipo de recurso específico para fácil referência e rastreamento. -->

### 5.1. Recurso 1

### 5.2. Recurso 2



## 6. Restrições
<!-- Observe todas as restrições de design, restrições externas, como requisitos operacionais ou regulamentares) ou outras dependências. -->



## 7. Faixas de qualidade

<!-- Requisitos não funcionais -->
<!-- Defina as faixas de qualidade para desempenho, robustez, tolerância a falhas, usabilidade e características similares que o conjunto de recursos não descreve. -->



## 8. Precedência e prioridade



## 9. Outros Requisitos do Produto

### 9.1. Padrões Aplicáveis:
<!--  Padrões que o produto deve estar em conformidade. Ex.: Iso, Acreditação, UNIX... -->

### 9.2. Requisitos do Sistema:
<!-- SO suportados, Plataformas, configurações, memória, dispositivos ... -->

### 9.3. Requisitos de Desempenho:
<!-- Itens como fatores de carga do usuário, largura de banda ou capacidade de comunicação, rendimento, exatidão, confiabilidade ou tempos de resposta  -->

### 9.4. Requisitos Ambientais:
<!-- Condições de uso, ambiente do usuário, disponibilidade do recurso, problemas de manutenção, manipulação de erros e recuperação. -->



## 10. Requisitos de Documentação
<!-- Documentos necessários para o produto. Ex: README, Guias de Uso, Guias de Instalação... -->

<!--## 11. Apêndice 1 - Atributos do Recurso-->
