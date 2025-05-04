import { ShoppingCart } from "@phosphor-icons/react"
import { BadgeContainer, CartButtonContainer } from "./styles"

interface ButtonProps {
  badgeNumber?: number
  onClick?: () => void
}

export function CartButton({ badgeNumber, onClick }: ButtonProps) {
  return (
    <div>
      <CartButtonContainer onClick={onClick}>
        <ShoppingCart size={22} weight="fill" />
      </CartButtonContainer>

      {badgeNumber && badgeNumber > 0 ? (
        <BadgeContainer>{badgeNumber}</BadgeContainer>
      ) : null}
    </div>
  )
}
