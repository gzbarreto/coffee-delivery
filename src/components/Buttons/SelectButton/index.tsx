import { JSX } from "react"
import { SelectContainer, SelectContainerSelected } from "./styles"

interface ButtonProps {
  label: string
  icon: JSX.Element
  isSelected?: boolean
  onClick?: () => void
}

export function SelectButton({
  label,
  onClick,
  icon,
  isSelected = false,
}: ButtonProps) {
  return isSelected ? (
    <SelectContainerSelected onClick={onClick}>
      <span>{icon}</span>
      <p>{label}</p>
    </SelectContainerSelected>
  ) : (
    <SelectContainer onClick={onClick}>
      <span>{icon}</span>
      <p>{label}</p>
    </SelectContainer>
  )
}
