import coffeTradicional from "../assets/coffe-img/Type=Expresso.png"
import coffeAmericano from "../assets/coffe-img/Type=Americano.png"
import coffeCremoso from "../assets/coffe-img/Type=Expresso Cremoso.png"
import coffeGelado from "../assets/coffe-img/Type=Café Gelado.png"
import coffeComLeite from "../assets/coffe-img/Type=Café Com Leite.png"
import latte from "../assets/coffe-img/Type=Latte.png"
import capuccino from "../assets/coffe-img/Type=Capuccino.png"
import macchiato from "../assets/coffe-img/Type=Macchiato.png"
import mocaccino from "../assets/coffe-img/Type=Mochaccino.png"
import chocolateQuente from "../assets/coffe-img/Type=Chocolate Quente.png"
import cubano from "../assets/coffe-img/Type=Cubano.png"
import havaiano from "../assets/coffe-img/Type=Havaiano.png"
import arabe from "../assets/coffe-img/Type=Árabe.png"
import irlandes from "../assets/coffe-img/Type=Irlandês.png"

export const coffeeTypes = [
  {
    id: 1,
    title: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    tags: ["Tradicional"],
    srcImg: coffeTradicional,
  },
  {
    id: 2,
    title: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    tags: ["Tradicional"],
    srcImg: coffeAmericano,
  },
  {
    id: 3,
    title: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    tags: ["Tradicional"],
    srcImg: coffeCremoso,
  },
  {
    id: 4,
    title: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    tags: ["Tradicional", "Gelado"],
    srcImg: coffeGelado,
  },
  {
    id: 5,
    title: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
    srcImg: coffeComLeite,
  },
  {
    id: 6,
    title: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
    srcImg: latte,
  },
  {
    id: 7,
    title: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
    srcImg: capuccino,
  },
  {
    id: 8,
    title: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
    srcImg: macchiato,
  },
  {
    id: 9,
    title: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    tags: ["Tradicional", "Com leite"],
    srcImg: mocaccino,
  },
  {
    id: 10,
    title: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    tags: ["Especial", "Com leite"],
    srcImg: chocolateQuente,
  },
  {
    id: 11,
    title: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    tags: ["Especial", "Alcoólico", "Gelado"],
    srcImg: cubano,
  },
  {
    id: 12,
    title: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    tags: ["Especial"],
    srcImg: havaiano,
  },
  {
    id: 13,
    title: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    tags: ["Especial"],
    srcImg: arabe,
  },
  {
    id: 14,
    title: "Irlandês",
    description: "Bebida a base de café expresso, uísque irlandês e chantilly",
    price: 9.9,
    tags: ["Especial", "Alcoólico"],
    srcImg: irlandes,
  },
]
