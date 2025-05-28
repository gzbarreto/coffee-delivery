import { ShoppingCart } from "@phosphor-icons/react"
import { IconButton } from "../../Buttons/IconButton"
import { NumberInput } from "../../Inputs/NumberInput"
import { CardCatalogContainer, FooterContainer, PriceContainer, TagContainer } from "./styles"

interface CardCatalogProps {
  title: string
  description: string
  price: number
  tags: string[]
  srcImg: string
}

export function CardCatalog({
  title,
  description,
  price,
  tags,
  srcImg,
}: CardCatalogProps) {

  return (
    <CardCatalogContainer>
      <img src={srcImg} alt={title} />
      <TagContainer>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{title}</h3>
      <p>{description}</p>

      <FooterContainer>
        <PriceContainer>
          <span>R$</span>{price.toFixed(2).replace(".", ",")}
        </PriceContainer>
        <div>
          <NumberInput />
          <IconButton icon={<ShoppingCart size={22} weight="fill" />} />
        </div>
      </FooterContainer>
    </CardCatalogContainer>
  )
}
