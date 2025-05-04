import { useState } from "react"
import { TextInputContainer } from "./styles"

interface TextInputProps {
  label: string
  isOptional?: boolean
}

export function TextInput({ label, isOptional = false }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInputContainer hasFocus={isFocused}>
      <input
        type="text"
        placeholder={label}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isOptional ? <span>Opcional</span> : null}
    </TextInputContainer>
  )
}
