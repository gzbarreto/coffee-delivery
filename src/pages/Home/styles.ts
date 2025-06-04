import styled from "styled-components"

interface HeroIconProps {
  color: "yellow-dark" | "yellow" | "purple" | "base-text"
}

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme["background"]};
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0 3rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.75rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const HeroItems = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1.25rem;


div {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
`

export const HeroIcon = styled.span<HeroIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};
`
export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  margin-bottom: 10rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
`