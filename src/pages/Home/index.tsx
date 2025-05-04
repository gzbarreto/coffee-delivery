import { TextInput } from "../../components/Inputs/TextInput"

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <TextInput label="Type here" isOptional={false}/>
    </div>
  )
}
