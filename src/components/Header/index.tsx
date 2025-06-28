import { MapPin } from "@phosphor-icons/react"
import { CartButton } from "../Buttons/CartButton"
import { ActionsContainer, HeaderContainer, LocationContainer } from "./styles"
import { useNavigate } from "react-router"

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <img src="src\assets\company-logo.png" alt="Coffe Delivery" onClick={() => navigate("/")}/>

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton onClick={() => navigate("/checkout")}/>
      </ActionsContainer>
    </HeaderContainer>
  )
}
