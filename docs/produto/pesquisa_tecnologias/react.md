<h1> Tutorial de instalação básica para novos usuários em MDS - React </h1>

## Histórico de versão

|    Data    | Versão |          Modificação           |       Autor        |
| :-------- | :---- | :---------------------------- | :---------------- |
| 24/08/2021 |  0.1   | Criação e redação do documento | [@pedrohelias](https://github.com/pedrohelias)    |
| 24/08/2021 |  0.2   |       Correção do título       | [@pedrohelias](https://github.com/pedrohelias)    |
| 07/09/2021 |  1.0   |       Revisão e correção       | [@klyssmannoliveira](https://github.com/klyssmannoliveira) |
| 13/09/2021 |  1.1   | Alteração no histórico de versão       | [@victordscabral](https://github.com/victordscabral) |

<h2>Introdução</h2>
Este documento tem comoo objetivo a apresentação dos primeiros passos no React.

<h2>1º passo: Baixar o NodeJs</h2>

Para utilizar o React, é necessário baixar a ferramenta conhecida como NodeJs - um JavaScript Runtime, um ambiente de execução do JavaScript. O NodeJs pode ser encontrado no site https://nodejs.org/en/. Ao encontrar o sistema operacional utilizado, baixe a versão desejada. Recomenda-se versões LTS - Long Time Support. São as mais estáveis e apropriadas para desenvolvimento e com menos bugs.

- No windows:

  Apenas baixar o instalador e proseguir com o procedimento normal de instalação de softawares no Windows.

- No Linux via terminal:

  Primeiramente, digite no terminal:

  > curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -

  Se o computador não tiver o curl, basta instalar com:

  > sudo apt install curl

  Nota: No comando do terminal, verifica-se "setup_14.x". E isso significa que será instalada a versão mais recente LTS referente a distribuição iniciada com 14.

  Agora, para instalar propriamente dito o NodeJs, digite:

  > sudo apt-get install -y nodejs

  Nota: o -y referece a tornar as opções que a instalação permite que o usuário resolva permanentemente como "Yes".

  Para testar se a instalação funcionou, é necessário digitar:

  > node --version

  Deve aparecer a versão instalada do NodeJs.

<h2>2º Passo: Instalar um Editor.</h2>

Para manejo e utilização do framework e da linguagem, recomenda-se utilizar o VSCode, por ser amplamente completo e útil, e bastante popular entre desenvolvedores. A instalação do VSCode segue o padrão de instalação. No Windows, apenas baixar o executável e instalar o editor. No Linux, é possível encontra-lo na própria Store(por exemplo, na distrô Ubuntu, é a UbuntuStore).

<h2>3º Passo: VSCode e React</h2>

Já com o VSCode aberto, criar uma pasta dentro do próprio software. Em seguida, abrir o terminal do software e digitar:

> npx create-react-app .

Esse comando facilmente criará todo um sistema inicial de como será o projeto em React a se desenvolver, instalando todas as dependências do projeto. Quanto a opção de colocar o ponto(.) no fim do comando, isso sinaliza que se deseja criar um novo app na própria pasta em uso. Geralmente, pode ser um processo demorado.

Após esse processo de instalação e adaptação, digitar:

> npm start

Isso irá inicializar o servidor e o código poderá ser executado, gerando um endereço que ao ser acessado mostra a Home do React no navegador.

Deste ponto em diante, você estará habilitado ao primeiro passo com o React.

<h2>Additional Tips!</h2>

- Hello World!

Primeiramente, ir em "src" e buscar o arquivo "App.js". Este será o primeiro arquivo padrão do projeto em React, que vai "rodar" na página inicial. Neste arquivo, apagar todo o código escrito e digitar:

```
import React from "react";


const App = () => {

return <h1>Hello World!</h1>;

};




export default App;



```

Após esse passo, pode apenas salvar o código se já estiver com o projeto rodando ou então digitar:

> npm start

Será possível verificar uma mensagem aparecendo no navegador, escrita "Hello World!".
