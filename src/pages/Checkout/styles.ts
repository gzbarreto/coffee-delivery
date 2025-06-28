import styled from "styled-components"

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  h4 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 700;
    font-family: "Baloo 2", sans-serif;
  }
`

export const FormContainer = styled.div`
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

  width: 40%;
  margin: 0 auto;
`

export const CartContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`
