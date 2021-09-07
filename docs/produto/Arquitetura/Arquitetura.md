## Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  19/08/2021 | [Magno Luiz](https://github.com/magnluiz) , [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Helias](https://github.com/pedrohelias), [Eduardo Gurgel](https://github.com/EduardoGurgel) |  Criação e abertura do documento de arquitetura |
|  1.1 |  25/08/2021 | [Pedro Helias](https://github.com/pedrohelias) |  Adição de algumas partes do documento |
|  1.2 |  26/08/2021 | [Pedro Helias](https://github.com/pedrohelias)| Novas adições no documento |
|  1.3 |  26/08/2021 | [Eduardo Gurgel](https://github.com/EduardoGurgel) | Inclusão do diagrama do Banco de dados e Relatório |
|  1.4 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do tópico sobre MongoDB |
|  1.4.1 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do tópico sobre Front-End e ajuste na tabela de versionamento |
|  1.4.2 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do diagrama de relações |
|  1.4.3 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do tópico sobre Back-End |
|  1.5 |  02/09/2021 | [Pedro Helias](https://github.com/pedrohelias) |  Atualização da introdução do documento |
|  1.5.1 |  02/09/2021 | [Pedro Helias](https://github.com/pedrohelias) |  Atualização da descrição das tecnologias a serem utilizadas adicionalmente a algumas melhorias na introdução |
|  1.5.2 |  02/09/2021 | [Pedro Helias](https://github.com/pedrohelias) |  Atualização da Visão Lógica e adições neste tópico |
|  1.6 |  04/09/2021 | [Pedro Helias](https://github.com/pedrohelias), [Magno Luiz](https://github.com/magnluiz)|  Finalização do documento - primeira versão - com adições extras|
|  1.6.1 |  04/09/2021 | [Gabriel Luiz](https://github.com/ggomesbr) | Adição do diagrama de casos de uso e ajustes no histórico de versões.|



## Sumário
1.  **Introdução**
- 1.1 Finalidade
- 1.2 Escopo
- 1.3 Definições, Acrônimos e Abreviações
- 1.4 Visão Geral  

2. **Representação Arquitetural**
- 2.1 Diagrama de Relações
- 2.2 Representação dos Serviços
- 2.2.1 Front-end
- 2.2.2 Back-end
- 2.3 Tecnologias
- 2.3.1 Python
- 2.3.2 Django API
- 2.3.3 MongoDB
- 2.3.4 JavaScript
- 2.3.5 React.js  

3. **Metas e Restrições da Arquiteura**
- 3.1 Metas
- 3.2 Restrições Tecnológicas  

4. **Visão de Casos de Uso**
- 4.1. Realização de Casos de Uso  

5. **Visão Lógica**
- 5.1. Visão Geral
- 5.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura
- 5.3. Visão da Implantação
- 5.3.1 Front-end
- 5.3.2 Back-end

## 1. Introdução

### 1.1 Finalidade

O presente documento tem como finalidade registrar e informar a arquitetura do projeto Checklist Hospitalar, a estrutura tecnológica decidida e desenvolvida, além da divisão entre frentes do desenvolvimento do projeto (Back-End e Front-End), a fim de documentar e simplificar o entendimento a respeito da visão arquitetural.

### 1.2 Escopo

Partindo deste documento, o leitor ou usuário do projeto Checklist Hospitalar terá entendimento a respeito do funcionamento do sistema, da estrutura arquitetural e as divisões entre sub-sistemas. É possível entender também todo o processo de desenvolvimento do projeto.
 
### 1.3 Definições, Acrônimos e Abreviações

Abreviação | Significado
---------- | -----------
MDS        |  Métodos de Desenvolvimento de Software       
IDE        |  Ambiente de desenvolvimento
API        |  Application Programming Interface
REST       |  Transferência Representacional de Estado
WEB        |  World Wide Web
HTML       |  HyperText Markup Language
CSS        |  Cascading Style Sheets 
ID         |  Identificador de Usuário 
PDF        |  Portable Document Format 
OMS        |  Organização Militar de Saúde

### 1.4 Visão Geral

Tópico | Descrição
------- | ---------
Introdução | Descreve informações sobre a finalidade e a organização do documento.
Representação arquitetural | Representa a arquitetura geral do software, incluindo decisões de tecnologia e o diagrama de relações.
Metas e restrições da Arquitetura | Demonstra os requisitos e objetivos do software e os impactos que possuem na arquitetura.
Visão de casos de uso | Demonstração dos casos de uso da aplicação.
Visão lógica | Descreve as partes significativas relacionadas ao ponto de vista da arquitetura e a modelagem de design.

## 2. Representação Arquitetural

###  2.1 Diagrama de Relações

![Diagrama de relações](https://i.imgur.com/q5DgXKp.png)

###  2.2 Representação dos Serviços

#### 2.2.1 Front-end
O Front-end ficará responsável pela experiência do usuário com o web app, será desenvolvido para que tenha a melhor interação possível com as funcionalidades do Software. Também terá como foco desenvolver uma identidade visual limpa e acessível para o entendimento da aplicação.

 
#### 2.2.2 Back-end
 O Backend ficará responsável pelas manipulações dos dados, tais como validações, regras de negócio, segurança, análises dos dados e etc. Serão desenvolvidas também as APIs, que irão integrar cada aplicação existente da plataforma, comunicando-se com o Banco de Dados, modelando as informações e retornando-as para o usuário, assim como, recebendo informações do mesmo para serem processados no server-side.

### 2.3 Tecnologias

 #### 2.3.1 Python

 O Python é uma linguagem de programação interpretada e pouco tipada - não sendo necessária a declaração do tipo da variável. Seu potencial se encontra em seu propósito geral, aplicando-se em sistemas Desktop, sistemas Web (com enomes aplicações no Back-End) e até aplicações Mobile. Outro campo onde há bastante destaque da linguagem se encontra nas Aplicações Científica/Matemáticas, tais como Ciência de Dados e Inteligência Artificial. Pode ser desenvolvido em diversas IDE's a gosto do desenvolvedor, além de possuir bastante recursos e uma comunidade crescente. O Python pode ser utilizado em diversas frameworks, para usos em geral, e neste projeto será utilizado a partir do Django API.

 ![Gostaria de aprender Python](https://www.impacta.com.br/blog/wp-content/uploads/2016/04/mais-querem-aprender.png)
 > Fonte: <a href="https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages">StackOverflow Developer Survey </a>

 A imagem acima mostra um levantamento realizado pelo StackOverflow em 2020 explicitando a linguagem que os desenvolvedores ainda não utilizam, mas desejam aprender. É mais um fato que comprova a grande popularidade dessa linguagem de programação.


 #### 2.3.2 Django API

 O Django é um framework especifico para aplicações em Back-End, sendo programado na linguagem Python. Especificamente para esse Projeto, será utilizado o Django REST API. Uma API, do inglês Application Programming Interface, são um conjunto de rotinas de processos especificos para aplicações voltadas a sistema WEB. Essas rotinas são especificas para atender as requisições exercidas pelo Front-End, e a partir do que foi solicitado, a API executará alguma coisa, e retornará a resposta solicitada. Um bom exemplo seria a requisição da matrícula do Usuário X. A API buscará acessar os dados solicitados, em um banco de dados, por exemplo, e entregará a quem requisitou. 


 #### 2.3.3 MongoDB

 O MongoDB trata-se de um banco de dados não relacional que além de possuir baixo custo, por tratar-se de um software livre, possui um ótimo desempenho e é orientado a documentos, facilitando a consulta de dados.

 #### 2.3.4 JavaScript
O JavaScript é uma linguagem interpretada, bastante conhecida como a linguagem de scripts para Web, recorrentemente utilizada no React, por exemplo. Este voltado para o FrontEnd. Também usada em ambientes independentes de Browser, como NodeJs, esse mais voltado para o BackEnd da aplicação.

![Curva de popularidade do JavaScript durante o ano de 2020](https://cdn.buttercms.com/x1McFixQuaCNjsMbruUp)

> Fonte: <a href="https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages">StackOverflow Developer Survey </a>

A imagem acima é um levantamento feito pelo StackOverflow a respeito das linguagens de programação mais populares em 2020 utilizadas por desenvolvedores. É interessante citar que a curva de popularidade do JavaScript é tamanha, que o desenvolvimento de novos Frameworks é algo recorrente.

<a href="https://imgur.com/929abGB"><img src="https://i.imgur.com/929abGB.png" title="source: imgur.com" /></a>
>Fonte: CodersRank.io

Foi a linguagem de programação escolhida para o projeto devido a aplicação, se encaixa perfeitamente num dos requisitos propostos, relacionado a ser uma aplicação web; e possui vasto material de apoio - sua popularidade promove seu desenvolvimento. Além do retorno educacional, como uma linguagem escolhida para desenvolver as skills em programação voltada a WEB.
 
 #### 2.3.5 React.js
 
O React é uma biblioteca da linguagem JavaScript, focada em desenvolver e criar interfaces de usuários em páginas WEB. A Tecnologia foi desenvolvida e é mantida pelo Facebook, e possui um estado de desenvolvimento recorrente. Atua no modelo de código aberto, é aplicável para qualquer usuário que deseja utilizá-la.

Foi o Framework para o FrontEnd escolhido para o projeto pois: engloba conceitos de HTML e CSS, utilizados para desenvolvimento WEB e, de certa forma, facilita bastante o desenvolvimento de um projeto em FrontEnd; é escrita em JavaScript; além do recurso educacional citado anteriormente, visto que é um Framework bastante popular e amplamente utilizado e requerido no mercado.

Apesar de ser voltado para WEB, o React possui uma alternativa para o desenvolvimento Mobile: o React Native. Essa plataforma consegue desenvolver Android e iOS de forma nativa.

## 3. Metas e Restrições da Arquitetura
### 3.1 Metas

O sistema WEB desenvolvido tem como metas a serem atingidas:

<ul>
<li>O desenvolvimento de um sistema que facilite o preenchimento e armazenamento das avaliações coletadas pelos analistas</li>
<li>Modernizar e dinamizar o preenchimento do relatório, a vista de contribuir com o serviço do analista</li>
<li>Automatizar o processo de geração de relatórios</li>
<li>Executar melhorias e modernização no armazenamento de dados</li>
</ul>

Como metas de arquitetura, busca-se desenvolver e habilitar o melhor background para que possam ser desenvolvidas e aplicadas as metas propostas no cotidiano de trabalho de analistas e administradores.

### 3.2 Restrições Tecnológicas

As restrições se aplicam as tecnologias a serem utilizadas no sistema WEB desenvolvido:

<ul>
<li><b>Python</b>: Linguagem de programação a ser utilizada no BackEnd da aplicação, juntamente do Django</li>
<li><b>Django API</b>: FrameWork utilizada no BackEnd da aplicação, responsável pelas conexões com o banco e pelas regras de negócio</li>
<li><b>MongoDB</b>: Sistema responsável pelo armazenamento e gerência dos dados apresentados à aplicação. Trabalhará em conjunto ao Django API</li>
<li><b>JavaScript</b>: Linguagem de programação específica para desenvolvimento WEB FrontEnd. Trabalhará juntamente do React.Js</li>
<li><b>React.js</b>: FrameWork específico para o FrontEnd da aplicação, vai simplificar a execução do FrontEnd da aplicação.</li>

</ul>

## 4. Visão de Casos de Uso
<img src="https://i.imgur.com/Pjr6TbL.jpg" width="600" height="500" />



### 4.1. Realização de Casos de Uso

A documentação relacionada a Visão de Casos de Uso visa objetivar e determinar o sistema a partir da interação com o usuário, e o que o mesmo está apto, a partir de seu ponto de vista, a utilizar no sistema.

O usuário pode:

<ul>
<li>Preencher Checklists;</li>
<li>Salvar as Checklists no sistema;</li>
<li>Realizar comentários sobre as avaliações;</li>
<li>Realizar controle de login;</li>
<li>Realizar cadastro;</li>
<li>Gerar gráficos das avaliações;</li>
<li>Gerenciar avaliações feitas/pendentes;</li>
<li>Editar itens do checklist;</li>
<li>Verificar status da avaliação;</li>
<li>Gerar relatórios.</li>
</ul>


Quanto a realização específica dos Casos de Uso:

|Funcionalidade|Autor|Descrição|
|:-:|:-|:-|
|Preenchimento de Checklist|Usuário|O Usuário poderá preencher a checklist com todos os dados solicitados. O mesmo pode realizar uma avaliação da qual recebe um novo código respectivo ao hospital indicado.|
|Salvar o Checklist|Usuário|O Usuário poderá salvar os dados da checklist a fim de serem utilizados ou editados posteriormente.|
|Comentários sobre as avaliações|Usuário|Dado a necessidade quanto a avaliação, o usuário poderá realizar comentários e ponderações a respeito das avaliações.|
|Gerar o relatório|Usuário|O Usuário poderá gerar relatórios que vão descrever e representar os dados obtidos da tabela avaliativa.|
|Controle de Login|Administrador| O Administrador poderá realizar controle de acesso de usuários e controle de login no sistema. O usuário comum terá acesso ao ambiente, com as devidas credenciais.|
|Gerar gráficos das avaliações|Usuário| O usuário poderá ter acesso ao gráfico gerado das avaliações, a partir do relatório.|
|Gerenciar as avaliações já feitas/pendentes|Adminstrador| O Administrador terá acesso as avaliações já feitas/pendentes, bem como a edição dos itens que compõe as avaliações. 
|Verificar Status da avaliação|Usuário| O Usuário poderá verificar o status da avaliação a partir do seu preenchimento.|





## 5. Visão Lógica

###  5.1. Visão Geral

O Sistema WEB estrutura-se em uma arquitetura de objetos determinados no modelo da aplicação, que interagem entre si, facilitando o acesso e possíveis manutenções. A aplicação se inicia com a tela de Login que irá buscar os dados de cadastor do usuário. É possível executar um novo cadastro em decorrência de não possuir um cadastro anterior. Após acesso permitido, há 4 opções aptas para interação com o usuário: "Iniciar Nova Avaliação", "Avaliação", "Gerar Relatório", "Gerenciador". Em Gerenciador, é possível identificar os Usuários, com descrições de Nome e Cargo. além de verificar a avaliação e o ID do registro.  Em "Gerar Relatório", o usuário pode interagir com os campos para inserção de código de registro e o nome do hospital. Caso haja uma avaliação coerente ao solicitado, é possível baixar o .PDF do documento. Em "Iniciar Nova Avaliação", o usuário pode escrever em diversos campos, contendo avaliações, pontos, status e inserção de itens. É possível editar avaliações, segundo o nível hierárquico do usuário no sistema.


###  5.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura  

- O Diagrama abaixo mostra a estrutura padrão dos pacotes referentes ao Front-End e como o mesmo se divide:

![DiagramaFrontEndPacotes](https://i.imgur.com/V3VdUUq.png)

- O Diagrama abaixo mostra a estrutura padrão dos pacotes referentes ao Back-End e como o mesmo se divide:

![DiagramaBackEndPacotes](https://i.imgur.com/4ZcmAsx.png)

 
###  5.3 Visão da Implantação

###  5.3.1 Front-end
 - Diagrama para o FrontEnd
![DiagramaFrontEnd](https://i.imgur.com/vzMk8fJ.jpg)
###  5.3.2 Back-end
 - Diagrama de Classes - Relatório
![diagramaClasses_TimeB_Relatorio](https://user-images.githubusercontent.com/51385738/131055882-6b9e244b-477d-45d5-8148-aad9d5760560.png)

 - Diagrama de Classe - Banco de Dados
![diagramaClasses_TimeA](https://user-images.githubusercontent.com/51385738/131055637-2dcb3541-b6db-404a-aa95-6b0b65033fa3.jpg)
