import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react"
import {
  AddressContainer,
  CartContainer,
  CheckoutContainer,
  ContentWrapper,
  PaymentContainer,
  PaymentMethodsContainer,
  Pricing,
  TitleContainer,
} from "./styles"
import { TextInput } from "../../components/Inputs/TextInput"
import { SelectButton } from "../../components/Buttons/SelectButton"
import { CardSmall } from "../../components/Card/CardSmall"
import { PrimaryButton } from "../../components/Buttons/PrimaryButton"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function Checkout() {
  const { coffeeList, deliveryFee } = useContext(CartContext)
  const navigate = useNavigate()

  const totalItemsPrice = coffeeList?.reduce((total, item) => {
    return total + item.coffee.price * item.quantity
  }, 0)

  return (
    <CheckoutContainer>
      <ContentWrapper>
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
            <TextInput label="Rua" area="street" />
            <TextInput label="Número" area="number" />
            <TextInput label="Complemento" isOptional area="complement" />
            <TextInput label="Bairro" area="district" />
            <TextInput label="Cidade" area="city" />
            <TextInput label="UF" area="state" />
          </form>
        </AddressContainer>

        <PaymentContainer>
          <TitleContainer>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <h5>Pagamento</h5>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </TitleContainer>
          <PaymentMethodsContainer>
            <SelectButton
              label="Cartão de Crédito"
              icon={<CreditCard size={16} color="#8047F8" />}
            />
            <SelectButton
              label="Cartão de Débito"
              icon={<Bank size={16} color="#8047F8" />}
            />
            <SelectButton
              label="Dinheiro"
              icon={<Money size={16} color="#8047F8" />}
            />
          </PaymentMethodsContainer>
        </PaymentContainer>
      </ContentWrapper>

      <ContentWrapper>
        <h4>Cafés selecionados</h4>
        <CartContainer>
          {coffeeList?.map((coffeeItem) => (
            <CardSmall
              key={coffeeItem.coffee.id}
              {...coffeeItem.coffee}
              quantity={coffeeItem.quantity}
            />
          ))}
          {/* checks if the cart is empty */}
          {coffeeList && coffeeList.length > 0 ? (
            <>
              <Pricing>
                <table>
                  <tbody>
                    <tr>
                      <td>Total de itens</td>
                      <td>R${totalItemsPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Entrega</td>
                      <td>R${deliveryFee.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        <strong>R${(totalItemsPrice + deliveryFee).toFixed(2)}</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Pricing>
              <PrimaryButton
                label="Confirmar Pedido"
                onClick={() => console.log(coffeeList)}
              />
            </>
          ) : (
            <>
              <p style={{padding: "1rem 0"}}>Seu carrinho está vazio.</p>
              <PrimaryButton
                label="Adicionar cafés"
                onClick={() => navigate("/")}
              />
            </>
          )}
        </CartContainer>
      </ContentWrapper>
    </CheckoutContainer>
  )
}
