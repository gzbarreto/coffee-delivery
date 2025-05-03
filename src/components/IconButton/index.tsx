import { JSX } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
  icon: JSX.Element
  onClick?: () => void
}

export function IconButton({ icon, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick}>{icon}</ButtonContainer>
}
