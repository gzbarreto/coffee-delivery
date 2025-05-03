import { IconButton } from "../../components/IconButton"
import { PrimaryButton } from "../../components/PrimaryButton"
import { SecondaryButton } from "../../components/SecondaryButton"

import { ShoppingCart, Trash } from "@phosphor-icons/react"

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <PrimaryButton label={"Label"} />
      <SecondaryButton label={"Label"} icon={<Trash size={16} />} />
      <IconButton icon={<ShoppingCart size={22} weight="fill"/>} />
    </div>
  )
}
