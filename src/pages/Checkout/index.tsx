import { MapPinLine } from "@phosphor-icons/react"
import {
  AddressContainer,
  CartContainer,
  CheckoutContainer,
  FormContainer,
  PaymentContainer,
  TitleContainer,
} from "./styles"
import { TextInput } from "../../components/Inputs/TextInput"

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h4>Complete seu pedido</h4>
        <AddressContainer>
          <TitleContainer>
            <MapPinLine size={22} />
            <div>
              <h5>Endereço de Entrega</h5>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleContainer>
          <form>
            <TextInput label="CEP" area="cep" />
            <TextInput label="Rua" area="street"/>
            <TextInput label="Número" area="number" />
            <TextInput label="Complemento" isOptional  area="complement"/>
            <TextInput label="Bairro" area="district"/>
            <TextInput label="Cidade" area="city"/>
            <TextInput label="UF" area="state"/>
          </form>
        </AddressContainer>
        <PaymentContainer>
          <h5>Pagamento</h5>
        </PaymentContainer>
      </FormContainer>

      <CartContainer>
        <h4>Cafés selecionados</h4>
      </CartContainer>
    </CheckoutContainer>
  )
}
