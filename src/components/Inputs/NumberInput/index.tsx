import { Minus, Plus } from "@phosphor-icons/react"
import { NumberInputContainer } from "./styles"
import { useState } from "react"

export function NumberInput() {
  const [numberValue, setNumberValue] = useState(1)

  function handleAddItem() {
    setNumberValue((prevValue) => prevValue + 1)
  }

  function handleSubtractItem() {
    setNumberValue((prevValue) => (prevValue > 1 ? prevValue - 1 : 1)) // Decrement but prevent going below 1
  }

  return (
    <NumberInputContainer>
      <button onClick={handleSubtractItem}>
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" value={numberValue} />

      <button onClick={handleAddItem}>
        <Plus size={14} weight="bold" />
      </button>
    </NumberInputContainer>
  )
}
