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

//TODO: corrigir posicao do botao do carrinho quando tem um badge

// Requisitos do projeto:
// - Listagem de produtos (cafés) disponíveis para compra DONE
// - Adicionar uma quantidade específicas de itens no carrinho DONE
// - Aumentar ou remover a quantidade de itens no carrinho DONE
// - Exibir o valor total da soma de itens no carrinho multiplicados pelo valor (usar funcao REDUCE dos arrays) DONE
// - Exibir o total de itens no carrinho no Header DONE
// - Formulário para o usuário preencher o seu endereço
// - Fazer a validação dos campos do formulário
// Selecionar a forma de pagamento (Cartão de Crédito, Débito ou Dinheiro)
