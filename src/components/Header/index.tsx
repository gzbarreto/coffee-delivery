import { MapPin } from "@phosphor-icons/react"
import { CartButton } from "../Buttons/CartButton"
import { ActionsContainer, HeaderContainer, LocationContainer } from "./styles"
import { useNavigate } from "react-router"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

export function Header() {
  const navigate = useNavigate()
  const { coffeeList } = useContext(CartContext)

  const itemsInCart = coffeeList?.reduce((total, coffee) => {
    return total + coffee.quantity
  }, 0)

  return (
    <HeaderContainer>
      <img src="src\assets\company-logo.png" alt="Coffe Delivery" onClick={() => navigate("/")}/>

      <ActionsContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton onClick={() => navigate("/checkout")} badgeNumber={itemsInCart}/>
      </ActionsContainer>
    </HeaderContainer>
  )
}
