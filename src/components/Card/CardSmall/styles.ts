import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  max-width: 23rem;

  background: ${(props) => props.theme["base-card"]};
  padding: 0.5rem 0.25rem;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  h5 {
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
    text-align: left;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`

export const PriceTagContainer = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${(props) => props.theme["base-text"]};
  text-align: right;
`
