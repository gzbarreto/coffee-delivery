import { JSX } from "react"
import { IconButtonContainer } from "./styles"

interface ButtonProps {
  icon: JSX.Element
  onClick?: () => void
}

export function IconButton({ icon, onClick }: ButtonProps) {
  return <IconButtonContainer onClick={onClick}>{icon}</IconButtonContainer>
}
