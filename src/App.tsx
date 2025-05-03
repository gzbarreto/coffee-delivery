import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { GlobalStyle } from "./styles/global.ts"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>

          <Router />

      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

//TODO:
// - Listagem de produtos (cafés) disponíveis para compra
// - Adicionar uma quantidade específicas de itens no carrinho
// - Aumentar ou remover a quantidade de itens no carrinho
// - Formulário para o usuário preencher o seu endereço
// - Exibir o total de itens no carrinho no Header
// - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
