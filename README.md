
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

css

Copiar código

`@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");` 

## Reset de Estilos

Para garantir a consistência dos estilos, as margens e os preenchimentos são zerados para os seguintes elementos:

css

Copiar código

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

css


```css
`body {
  background-color: var(--main-bg-color);
  color: var(--font-color);
  font-family: var(--font-family-main);
}
```

Isso aplica o fundo principal, a cor da fonte principal e a fonte principal ao corpo da página. As variáveis podem ser utilizadas em qualquer regra CSS para garantir consistência e facilitar a manutenção dos estilos do aplicativo.

## Documentação de componentes

### AppHeader

#### Propriedades

O componente `AppHeader` não recebe propriedades (props).

#### Funcionalidade

O componente `AppHeader` exibe um cabeçalho simples com um logo centralizado. A imagem do logo é importada diretamente de um arquivo local (`@/assets/svg/logo-grupo-primo.svg`) e exibida dentro de uma tag `<img>`. A estrutura do componente inclui um cabeçalho (`<header>`) com um contêiner (`<div>`) que centraliza o logo.
___
### ColoredDivider

#### Propriedades

O componente `ColoredDivider` recebe a seguinte propriedade (prop):

-   **color** (String): Define a cor do divisor.
    -   **Tipo**: `String`
    -   **Valor padrão**: `"#000"`

#### Funcionalidade

O componente `ColoredDivider` exibe um divisor horizontal colorido. A cor do divisor é determinada pela propriedade `color`, que pode ser passada ao componente. Se nenhuma cor for fornecida, o divisor será preto (`#000`). A cor do divisor é aplicada dinamicamente usando a propriedade CSS `backgroundColor`.
___
### HeroSection

#### Propriedades

O componente `HeroSection` recebe as seguintes propriedades (props):

-   **bgColor** (String): Define a cor de fundo da seção.
    -   **Tipo**: `String`
    -   **Obrigatório**: `true`
-   **textColor** (String): Define a cor do texto na seção.
    -   **Tipo**: `String`
    -   **Obrigatório**: `true`
-   **title** (String): Define o título exibido na seção.
    -   **Tipo**: `String`
    -   **Obrigatório**: `true`
-   **subtitle** (String): Define o subtítulo exibido na seção.
    -   **Tipo**: `String`
    -   **Obrigatório**: `true`

#### Funcionalidade

O componente `HeroSection` exibe uma seção de destaque (hero section) com um título e subtítulo, estilizados de acordo com as cores de fundo e do texto fornecidas pelas propriedades. As cores são aplicadas dinamicamente através de estilos CSS computados.
___
### MoneyCard

#### Propriedades

O componente `MoneyCard` recebe as seguintes propriedades (props):

-   **amount** (Number): Define o valor monetário exibido no cartão.
    -   **Tipo**: `Number`
    -   **Obrigatório**: `true`
-   **title** (String): Define o título exibido no cartão.
    -   **Tipo**: `String`
    -   **Obrigatório**: `true`
-   **imageUrl** (String): Define a URL da imagem exibida no cartão, se fornecida.
    -   **Tipo**: `String`
    -   **Valor padrão**: `""`

#### Funcionalidade

O componente `MoneyCard` exibe um cartão contendo um valor monetário formatado, um título e, opcionalmente, uma imagem. O valor é formatado como moeda brasileira (BRL). Se a propriedade `imageUrl` for fornecida, a imagem será exibida acima do título e do valor.
___
### RangeSlider

#### Propriedades

O componente `RangeSlider` recebe as seguintes propriedades (props):

-   **type** (String): Define o tipo de valor a ser exibido. Pode ser "currency" para valores monetários formatados ou "month" para valores representando meses.
    -   **Tipo**: `String`
    -   **Valor padrão**: `"currency"`
-   **min** (Number): Define o valor mínimo do slider.
    -   **Tipo**: `Number`
    -   **Valor padrão**: `0`
-   **max** (Number): Define o valor máximo do slider.
    -   **Tipo**: `Number`
    -   **Valor padrão**: `100`
-   **step** (Number): Define o incremento entre os valores do slider.
    -   **Tipo**: `Number`
    -   **Valor padrão**: `1`
-   **modelValue** (Number): Define o valor inicial do slider.
    -   **Tipo**: `Number`
    -   **Valor padrão**: `0`
-   **label** (String): Define o rótulo exibido acima do slider.
    -   **Tipo**: `String`
    -   **Valor padrão**: `"Label"`

#### Funcionalidade

O componente `RangeSlider` exibe um slider horizontal com um rótulo e um valor associado. O slider permite que os usuários escolham um valor dentro de um intervalo definido pelos parâmetros `min` e `max`, com um incremento definido por `step`. O valor selecionado é exibido em tempo real, e sua aparência é personalizada com base nas propriedades definidas.
___
### RentabilityInfo

#### Propriedades

O componente `RentabilityInfo` recebe as seguintes propriedades (props):

-   **taxaSelic** (String): Define a taxa Selic exibida no box.
    -   **Tipo**: `String`
-   **rentabilidadeArca** (String): Define a rentabilidade do Arca exibida no box.
    -   **Tipo**: `String`
-   **dataAtualizacao** (String): Define a data de última atualização exibida no box.
    -   **Tipo**: `String`

#### Funcionalidade

O componente `RentabilityInfo` exibe informações sobre a taxa Selic, a rentabilidade do Arca e a data de última atualização. As informações são exibidas em um layout organizado em caixas de texto com ícones de ajuda. O conteúdo é estilizado com cores e estilos de fonte específicos.
___
### HomePage

#### Funcionalidade

O componente `Container` é uma seção de destaque que incentiva os usuários a acessarem o simulador de investimentos. Ele contém duas mensagens motivacionais e um botão que redireciona para o simulador de investimentos quando clicado.

#### Eventos

-   **goToInvestmentSimulator**: Método que é chamado quando o botão "Ir para Simulador de Investimento" é clicado. Ele redireciona o usuário para a página do simulador de investimentos.

___
### InvestmentSimulator

#### Funcionalidades

O componente `InvestmentSimulator` é um simulador de investimento que permite aos usuários calcular a rentabilidade de investimentos com base em diferentes parâmetros.

1.  **Slider de Investimento Inicial:** Permite ao usuário selecionar o valor do investimento inicial.
2.  **Slider de Investimento Mensal:** Permite ao usuário selecionar o valor do investimento mensal.
3.  **Slider de Prazo do Investimento:** Permite ao usuário selecionar o prazo em meses para deixar o dinheiro investido.
4.  **Cálculo da Rentabilidade:** Calcula e exibe a rentabilidade do investimento em duas opções: Taxa Selic e Fundo Arca.
5.  **Exibição da Rentabilidade:** Mostra ao usuário o valor acumulado do investimento ao final do prazo selecionado para cada opção de investimento.

#### Props

O componente não aceita props externas, pois utiliza variáveis internas e métodos de cálculo para atualizar os resultados.

#### Eventos

O componente `InvestmentSimulator` não emite eventos.

Este componente utiliza outros componentes Vue.js para criar a interface do usuário:

-   `AppHeader`: Cabeçalho da aplicação.
-   `HeroSection`: Seção de destaque com título e subtítulo.
-   `RangeSlider`: Componente para seleção de valores através de sliders.
-   `MoneyCard`: Componente para exibir valores monetários com título.
-   `ColoredDivider`: Componente para criar divisores coloridos.
-   `RentabilityInfo`: Componente para exibir informações sobre rentabilidade.

O cálculo da rentabilidade é realizado internamente no componente, não sendo necessário interação externa para seu funcionamento.
