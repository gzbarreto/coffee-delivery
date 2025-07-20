import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { GlobalStyle } from "./styles/global.ts"
import { CartContextProvider } from "./contexts/CartContext.tsx"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

//TODO: refazer o contexto de order, trocando pra simplesmente CART. Nao precisa acompanhar o
//pedido, apenas o carrinho, nao precisa nem de ID

// Requisitos do projeto:
// - Listagem de produtos (cafés) disponíveis para compra DONE
// - Adicionar uma quantidade específicas de itens no carrinho
// - Aumentar ou remover a quantidade de itens no carrinho
// - Formulário para o usuário preencher o seu endereço
// - Exibir o total de itens no carrinho no Header
// - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor
