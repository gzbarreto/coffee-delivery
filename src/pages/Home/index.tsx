import { CardSmall } from "../../components/Card/CardSmall";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CardSmall
        price={99.99}
        srcImg="src\assets\coffe-img\Type=Americano.png"
        title="Título do produto"
      />
    </div>
  )
}
