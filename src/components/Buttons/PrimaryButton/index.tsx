import { PrimaryButtonContainer } from "./styles"

interface ButtonProps {
  type: "button" | "submit"
  form?: string // optional, to reference a form by id
  label: string
  onClick?: () => void
}

export function PrimaryButton({ label, onClick, type = "button", form }: ButtonProps) {
  return (
    <PrimaryButtonContainer form={form} type={type} onClick={onClick}>{label}</PrimaryButtonContainer>
  )
}
