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

interface CardSmallProps {
  title: string
  price: number
  srcImg: string
  quantity: number
}

export function CardSmall({ title, price, srcImg, quantity }: CardSmallProps) {
  return (
    <CardContainer>
      <ContentContainer>
        <img src={srcImg} alt={title} />
        <Details>
          <h5>{title}</h5>
          <ButtonsContainer>
            <NumberInput defaultValue={quantity}/>
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
