import { ShoppingCart } from "@phosphor-icons/react"
import { IconButton } from "../../Buttons/IconButton"
import { NumberInput } from "../../Inputs/NumberInput"
import {
  CardCatalogContainer,
  FooterContainer,
  PriceContainer,
  TagContainer,
} from "./styles"
import { useContext, useState } from "react"
import { CartContext } from "../../../contexts/CartContext"
import { Coffee } from "../../../reducers/cart/reducer"

export function CardCatalog({
  id,
  title,
  description,
  price,
  tags,
  srcImg,
}: Coffee) {
  const { addToCart } = useContext(CartContext)

  //controla a quantidade de items no card
  const [quantity, setQuantity] = useState(1)

  function handleAddToCart() {
    const newCoffee = {
      id,
      title,
      price,
      srcImg,
    }
    addToCart(newCoffee, quantity)
    setQuantity(1) // Reseta a quantidade após adicionar ao carrinho
  }

  return (
    <CardCatalogContainer>
      <img src={srcImg} alt={title} />
      <TagContainer>
        {tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </TagContainer>
      <h3>{title}</h3>
      <p>{description}</p>

      <FooterContainer>
        <PriceContainer>
          <span>R$</span>
          {price.toFixed(2).replace(".", ",")}
        </PriceContainer>
        <div>
          <NumberInput value={quantity} onChange={setQuantity} />
          <IconButton
            icon={<ShoppingCart size={22} weight="fill" />}
            onClick={handleAddToCart}
          />
        </div>
      </FooterContainer>
    </CardCatalogContainer>
  )
}
