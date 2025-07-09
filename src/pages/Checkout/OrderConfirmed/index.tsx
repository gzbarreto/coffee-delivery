import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { HeroIcon } from "../../Home/styles"
import {
  ConfirmationContainer,
  ItemContainer,
  SummaryContainer,
  TitleContainer,
} from "./styles"

export function OrderConfirmed() {
  return (
    <ConfirmationContainer>
      <div>
        <TitleContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você.</p>
        </TitleContainer>
        <SummaryContainer>
          <ItemContainer>
            <HeroIcon color="purple">
              <MapPin size={16} weight="fill" />
            </HeroIcon>
            <div>
              <p>
                Entrega em <strong>Rua Ribeirão Preto, 100</strong>
              </p>
              <p>Ferraz de Vasconcelos, SP</p>
            </div>
          </ItemContainer>

          <ItemContainer>
            <HeroIcon color="yellow">
              <Timer size={16} weight="fill" />
            </HeroIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </ItemContainer>

          <ItemContainer>
            <HeroIcon color="yellow-dark">
              <CurrencyDollar size={16}/>
            </HeroIcon>
            <div>
              <p>Modo de pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </ItemContainer>
        </SummaryContainer>
      </div>
      <img
        src="src\assets\Illustration.png"
        alt="Ilustração de um entregador de moto com um pacote"
      />
    </ConfirmationContainer>
  )
}
