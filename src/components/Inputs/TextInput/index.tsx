import { useState } from "react"
import { TextInputContainer } from "./styles"

interface TextInputProps {
  label: string
  isOptional?: boolean
  area?: string
}

export function TextInput({ label, isOptional = false, area }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <TextInputContainer hasFocus={isFocused}
    area={area}>
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
