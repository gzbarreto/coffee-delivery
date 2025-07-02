import styled from "styled-components"

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 28rem;
  gap: 2rem;
  margin-top: 0.75rem;

  h4 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 700;
    font-family: "Baloo 2", sans-serif;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;

  form {
    display: grid;
    grid-template-areas:
    "cep . ."
    "street street street"
    "number complement complement"
    "district city state";
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme["yellow-dark"]};

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  h5 {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }


`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
  gap: 2rem;
`

export const PaymentMethodsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
`
export const Pricing = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
  }

  td {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    padding-top: 0.75rem;
  }

  td:last-child {
    text-align: right;
    font-size: 1rem;
  }

  tr:last-child td {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`
