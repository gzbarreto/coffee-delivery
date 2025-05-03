import { JSX } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
  label: string
  icon: JSX.Element
  onClick?: () => void
}

export function SecondaryButton({ label, icon, onClick }: ButtonProps) {
  return (
    <ButtonContainer onClick={onClick}>
      <span>{icon}</span>
      <p>{label}</p>
    </ButtonContainer>
  )
}
