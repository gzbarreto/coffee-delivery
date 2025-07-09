import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { GlobalStyle } from "./styles/global.ts"
import { OrderContextProvider } from "./contexts/OrderContext.tsx"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <OrderContextProvider>
          <Router />
        </OrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

// Requisitos do projeto:
// - Listagem de produtos (cafés) disponíveis para compra DONE
// - Adicionar uma quantidade específicas de itens no carrinho
// - Aumentar ou remover a quantidade de itens no carrinho
// - Formulário para o usuário preencher o seu endereço
// - Exibir o total de itens no carrinho no Header
// - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
