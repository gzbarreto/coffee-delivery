import { ShoppingCart } from "@phosphor-icons/react"
import { IconButton } from "../../Buttons/IconButton"
import { NumberInput } from "../../Inputs/NumberInput"
import { CardCatalogContainer, FooterContainer, PriceContainer, TagContainer } from "./styles"
import { useState } from "react"

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
  
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    // Ao clicar o botão do carrinho, adiciona o item ao carrinho
    console.log(`${title} added to cart`);
    console.log(`Quantity: ${quantity}`);
  }

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
          <NumberInput value={quantity} onChange={setQuantity}/>
          <IconButton icon={<ShoppingCart size={22} weight="fill" />} onClick={handleAddToCart}/>
        </div>
      </FooterContainer>
    </CardCatalogContainer>
  )
}
