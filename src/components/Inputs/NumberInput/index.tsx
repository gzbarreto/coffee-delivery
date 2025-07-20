import { Minus, Plus } from "@phosphor-icons/react"
import { NumberInputContainer } from "./styles"

interface NumberInputProps {
  value: number
  defaultValue?: number
  onChange: (value: number) => void
}

export function NumberInput({ value, defaultValue, onChange }: NumberInputProps) {
  function handleAddItem() {
    onChange(value + 1)
  }

  function handleSubtractItem() {
    onChange(value > 1 ? value - 1 : 1) // Decrement but prevent going below 1
  }

  return (
    <NumberInputContainer>
      <button onClick={handleSubtractItem}>
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" defaultValue={defaultValue} value={value} />

      <button onClick={handleAddItem}>
        <Plus size={14} weight="bold" />
      </button>
    </NumberInputContainer>
  )
}
