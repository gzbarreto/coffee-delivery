import { CardCatalog } from "../../components/Card/Card Catalog"

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <CardCatalog
        title="Americano"
        srcImg="src\assets\coffe-img\Type=Americano.png"
        description="Um café americano é um café expresso com água quente, resultando em um sabor mais suave e menos concentrado."
        price={9.90}
        tags={['tradicional', 'com leite']}
      />
    </div>
  )
}
