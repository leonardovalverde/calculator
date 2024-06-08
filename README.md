
# Calculator

## Sumário

1. [Como clonar o projeto](#como-clonar-o-projeto)
2. [Scripts do projeto](#scripts-do-projeto)
3. [Dependências](#dependências)
4. [Estilos globais](#estilos-globais)
5. [Documentação de componentes](#documentação-de-componentes)

## Como clonar o projeto

Para rodar o projeto localmente, siga os passos abaixo em seu terminal:

1. Clone o repositório:
   ```bash
   git clone https://github.com/leonardovalverde/calculator.git
2. Entre na pasta do projeto:
   ```bash
   cd calculator
3. Instale as dependências do projeto:
   ```bash
   yarn
   ou
   npm install
4. Rode o comando para que o vue compile o projeto:
   ```bash
   yarn serve
   ou
   npm run serve

## Scripts do projeto

### `serve`

`vue-cli-service serve` 

Este script inicia um servidor de desenvolvimento. Ele serve a aplicação no ambiente de desenvolvimento e recarrega automaticamente quando há mudanças nos arquivos.

### `build`

`vue-cli-service build` 

Este script constrói a aplicação para produção. Ele gera os arquivos otimizados e prontos para serem implantados em um servidor de produção.

### `test:unit`

bash

`vue-cli-service test:unit` 

Este script executa testes unitários usando o Jest. É usado para verificar se os componentes individuais da aplicação estão funcionando conforme o esperado.

### `lint`

`vue-cli-service lint` 

Este script verifica o código-fonte do projeto em busca de problemas de estilo e erros usando o ESLint. É útil para manter a qualidade do código.

## Dependências

### `core-js`

Versão: ^3.8.3 Uma biblioteca de polifill que oferece suporte para recursos ECMAScript modernos em ambientes antigos.

### `vue`

Versão: ^3.2.13 O framework JavaScript principal usado para construir a interface do usuário.

### `vue-class-component`

Versão: ^8.0.0-0 Um decorador para classes Vue em TypeScript, facilitando a criação de componentes baseados em classes.

### `vue-router`

Versão: ^4.3.2 O roteador oficial para Vue.js, usado para gerenciar a navegação e as rotas na aplicação.

## Dependências de Desenvolvimento

### `@types/jest`

Versão: ^27.0.1 Definições de tipo para o Jest, permitindo melhor integração com TypeScript.

### `@typescript-eslint/eslint-plugin`

Versão: ^5.4.0 Um plugin ESLint para fornecer regras específicas para TypeScript.

### `@typescript-eslint/parser`

Versão: ^5.4.0 Um parser ESLint para analisar código TypeScript.

### `@vue/cli-plugin-babel`

Versão: ~5.0.0 Plugin CLI do Vue para integração com Babel, uma ferramenta para transpilar JavaScript moderno.

### `@vue/cli-plugin-eslint`

Versão: ~5.0.0 Plugin CLI do Vue para integração com ESLint.

### `@vue/cli-plugin-typescript`

Versão: ~5.0.0 Plugin CLI do Vue para suporte a TypeScript.

### `@vue/cli-plugin-unit-jest`

Versão: ~5.0.0 Plugin CLI do Vue para configuração e execução de testes unitários com Jest.

### `@vue/cli-service`

Versão: ~5.0.0 Serviço CLI do Vue que abstrai a configuração de Webpack.

### `@vue/eslint-config-typescript`

Versão: ^9.1.0 Configuração ESLint recomendada para uso com TypeScript em projetos Vue.

### `@vue/test-utils`

Versão: ^2.0.0-0 Utilitários de teste oficiais para Vue.js.

### `@vue/vue3-jest`

Versão: ^27.0.0-alpha.1 Adaptador Jest para Vue 3.

### `babel-jest`

Versão: ^27.0.6 Transformador para Jest que permite o uso de Babel.

### `eslint`

Versão: ^7.32.0 Ferramenta de linting para identificar e corrigir problemas no código JavaScript.

### `eslint-plugin-vue`

Versão: ^8.0.3 Plugin ESLint que oferece regras específicas para Vue.js.

### `jest`

Versão: ^27.0.5 Framework de teste JavaScript.

### `ts-jest`

Versão: ^27.0.4 Preset para Jest que permite testes com TypeScript.

### `typescript`

Versão: ~4.5.5 Linguagem de programação que é um superconjunto tipado de JavaScript.


## Estilos globais

## Importação de Fontes

O aplicativo utiliza três famílias de fontes importadas do Google Fonts:

1.  **Raleway**
2.  **Inter**
3.  **Open Sans**

Os URLs de importação são:
```css
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");` 
```
## Reset de Estilos

Para garantir a consistência dos estilos, as margens e os preenchimentos são zerados para os seguintes elementos:

`body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol {
  margin: 0;
  padding: 0;
}` 

## Variáveis CSS

### Cores

Variáveis de cores definidas para serem usadas globalmente no aplicativo:

-   **Cor de fundo principal**: `--main-bg-color` - `#f8f8f8`
-   **Cor de fundo secundária**: `--secondary-bg-color` - `#ddd`
-   **Cor da fonte principal**: `--font-color` - `#21211f`
-   **Cor da fonte secundária**: `--secondary-font-color` - `#0d0d0d`
-   **Cor da borda**: `--boder-color` - `#bfbdb6`
-   **Aqua marinho médio**: `--medium-aqua-marine` - `#54d4a0`
-   **Gradiente preto**: `--black-gradient` - `rgba(11, 11, 11, 0.9)`
-   **Gradiente preto completo**: `--black-gradient-full` - `rgba(11, 11, 11, 1)`

### Fontes

Variáveis de famílias de fontes definidas para serem usadas globalmente no aplicativo:

-   **Fonte principal**: `--font-family-main` - `"Inter", Avenir, Helvetica, Arial, sans-serif`
-   **Fonte secundária**: `--font-family-secondary` - `"Raleway", Avenir, Helvetica, Arial, sans-serif`
-   **Fonte terciária**: `--font-family-tertiary` - `"Open Sans", Avenir, Helvetica, Arial, sans-serif`

### Declaração de Variáveis CSS

As variáveis são definidas na pseudo-classe `:root` para estarem disponíveis globalmente:
```css
`:root {
  --main-bg-color: #f8f8f8;
  --secondary-bg-color: #ddd;
  --font-color: #21211f;
  --secondary-font-color: #0d0d0d;
  --boder-color: #bfbdb6;
  --medium-aqua-marine: #54d4a0;
  --black-gradient: rgba(11, 11, 11, 0.9);
  --black-gradient-full: rgba(11, 11, 11, 1);
  --font-family-main: "Inter", Avenir, Helvetica, Arial, sans-serif;
  --font-family-secondary: "Raleway", Avenir, Helvetica, Arial, sans-serif;
  --font-family-tertiary: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
}
```

## Utilização das Variáveis

Para usar essas variáveis em seu CSS, basta referenciá-las com a função `var()`. Por exemplo:

```css
`body {
  background-color: var(--main-bg-color);
  color: var(--font-color);
  font-family: var(--font-family-main);
}
```

Isso aplica o fundo principal, a cor da fonte principal e a fonte principal ao corpo da página. As variáveis podem ser utilizadas em qualquer regra CSS para garantir consistência e facilitar a manutenção dos estilos do aplicativo.
