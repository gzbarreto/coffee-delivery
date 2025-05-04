import { JSX } from "react"
import { SecondaryButtonContainer } from "./styles"

interface ButtonProps {
  label: string
  icon: JSX.Element
  onClick?: () => void
}

export function SecondaryButton({ label, icon, onClick }: ButtonProps) {
  return (
    <SecondaryButtonContainer onClick={onClick}>
      <span>{icon}</span>
      <p>{label}</p>
    </SecondaryButtonContainer>
  )
}
