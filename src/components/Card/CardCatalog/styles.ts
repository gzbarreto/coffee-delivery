import styled from "styled-components"

export const CardCatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 16rem;
  height: 19.375rem;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2.5rem;
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    margin-bottom: 1rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme["yellow-dark"]};

  span {
    background-color: ${(props) => props.theme["yellow-light"]};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.3;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    gap: 0.5rem;
  }
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.3;
  color: ${(props) => props.theme["base-text"]};

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
  }
`
