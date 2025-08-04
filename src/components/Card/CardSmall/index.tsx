import { Trash } from "@phosphor-icons/react"
import { SecondaryButton } from "../../Buttons/SecondaryButton"
import { NumberInput } from "../../Inputs/NumberInput"
import {
  ButtonsContainer,
  CardContainer,
  ContentContainer,
  Details,
  PriceTagContainer,
} from "./styles"
import { CartContext } from "../../../contexts/CartContext"
import { useContext } from "react"

interface CardSmallProps {
  id: number
  title: string
  price: number
  srcImg: string
  quantity: number
}

export function CardSmall({
  id: key,
  title,
  price,
  srcImg,
  quantity,
}: CardSmallProps) {
  const { updateCart } = useContext(CartContext)

  function setCoffeeQuantity(newQuantity: number) {
    console.log(newQuantity)
    updateCart(key, newQuantity)
  }

  return (
    <CardContainer>
      <ContentContainer>
        <img src={srcImg} alt={title} />
        <Details>
          <h5>{title}</h5>
          <ButtonsContainer>
            <NumberInput value={quantity} onChange={setCoffeeQuantity} />
            <SecondaryButton icon={<Trash size={16} />} label="Remover" />
          </ButtonsContainer>
        </Details>
      </ContentContainer>
      <PriceTagContainer>
        <span>R$ {price.toFixed(2)}</span>
      </PriceTagContainer>
    </CardContainer>
  )
}
