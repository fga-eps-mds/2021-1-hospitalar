## Histórico de Versões
| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  1.0 |  19/08/2021 | Magno Luiz , [Gabriel Luiz](https://github.com/ggomesbr), Pedro Helias, Eduardo Gurgel |  Criação e abertura do documento de arquitetura |
|  1.1 |  25/08/2021 | Pedro Helias |  Adição de algumas partes do documento |
|  1.2 |  26/08/2021 | Pedro Helias,| Novas adições no documento |
|  1.3 |  26/08/2021 | Eduardo Gurgel | Inclusão do diagrama do Banco de dados e Relatório |
|  1.4 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do tópico sobre MongoDB |
|  1.4.1 |  31/08/2021 | [Gabriel Luiz](https://github.com/ggomesbr), [Pedro Vieira](https://github.com/Pedro-V8), [Bruno Oliveira](https://github.com/eng-Bruno) | Inclusão do tópico sobre Front-End e ajuste na tabela de versionamento |



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

### 1.2 Escopo
 
### 1.3 Definições, Acrônimos e Abreviações

Abreviação | Significado


### 1.4 Visão Geral

## 2. Representação Arquitetural

###  2.1 Diagrama de Relações

###  2.2 Representação dos Serviços

#### 2.2.1 Front-end
O Front-end ficará responsável pela experiência do usuário com o web app, será desenvolvido para que tenha a melhor interação possível com as funcionalidades do Software. Também terá como foco desenvolver uma identidade visual limpa e acessível para o entendimento da aplicação.

 
#### 2.2.2 Back-end
 .

### 2.3 Tecnologias

 #### 2.3.1 Python


 #### 2.3.2 Django API

 #### 2.3.3 MongoDB

 O MongoDB trata-se de um banco de dados não relacional que além de possuir baixo custo, por tratar-se de um software livre, possui um ótimo desempenho e é orientado a documentos, facilitando a consulta de dados. 

 #### 2.3.4 JavaScript
O JavaScript é uma linguagem interpretada, bastante conhecida como a linguagem de scripts para Web, recorrentemente utilizada no React, por exemplo. Este voltado para o FrontEnd. Também usada em ambientes independentes de Browser, como NodeJs, esse mais voltado para o BackEnd da aplicação. 

![Curva de popularidade do JavaScript durante o ano de 2020](https://cdn.buttercms.com/x1McFixQuaCNjsMbruUp)

> Fonte <a href="https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages">StackOverflow Developer Survey </a>

A imagem acima é um levantamento feito pelo StackOverflow a respeito das linguagens de programação mais populares em 2020. É interessante citar que a curva de popularidade do JavaScript é tamanha, que o desenvolvimento de novos Frameworks é algo recorrente. 

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

### 4.1. Realização de Casos de Uso


## 5. Visão Lógica

###  5.1. Visão Geral



###  5.2. Pacotes de Design Significativos do Ponto de Vista da Arquitetura  



 
###  5.3. Visão da Implantação

###  5.3.1 Front-end

###  5.3.2 Back-end
 - Diagrama de Classes - Relatório
![diagramaClasses_TimeB_Relatorio](https://user-images.githubusercontent.com/51385738/131055882-6b9e244b-477d-45d5-8148-aad9d5760560.png)

 - Diagrama de Classe - Banco de Dados
![diagramaClasses_TimeA](https://user-images.githubusercontent.com/51385738/131055637-2dcb3541-b6db-404a-aa95-6b0b65033fa3.jpg)