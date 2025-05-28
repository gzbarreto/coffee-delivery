import { MapPin } from "@phosphor-icons/react"
import { CartButton } from "../Buttons/CartButton"
import { ActionsContainer, HeaderContainer, LocationContainer } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <img src="src\assets\company-logo.png" alt="Coffe Delivery" />

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton />
      </ActionsContainer>
    </HeaderContainer>
  )
}
