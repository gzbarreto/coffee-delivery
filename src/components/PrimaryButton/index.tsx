import { PrimaryButtonContainer } from "./styles"

interface ButtonProps {
  label: string
  onClick?: () => void
}

export function PrimaryButton({ label, onClick }: ButtonProps) {
  return (
    <PrimaryButtonContainer onClick={onClick}>{label}</PrimaryButtonContainer>
  )
}
