import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import {
  CoffeeList,
  CoffeeListContainer,
  HeroContainer,
  HeroContent,
  HeroIcon,
  HeroItems,
  HomeContainer,
  Intro,
} from "./styles"
import { CardCatalog } from "../../components/Card/CardCatalog"
import { coffeeTypes } from "../../mocks/CoffeeCatalog"

export function Home() {
  
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroContent>
          <Intro>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </Intro>
          <HeroItems>
            <div>
              <HeroIcon color="yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </HeroIcon>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <HeroIcon color="base-text">
                <Package size={16} weight="fill" />
              </HeroIcon>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <HeroIcon color="yellow">
                <Timer size={16} weight="fill" />
              </HeroIcon>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <HeroIcon color="purple">
                <Coffee size={16} weight="fill" />
              </HeroIcon>
              <p>O café chega fresquinho até você</p>
            </div>
          </HeroItems>
        </HeroContent>
        <img
          src="src\assets\hero-img.png"
          alt="Imagem de um copo de café com grãos ao redor"
        />
      </HeroContainer>

      <CoffeeListContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
         {coffeeTypes.map(coffee => (
            <CardCatalog key={coffee.id} {...coffee} />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
