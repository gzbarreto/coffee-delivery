import styled from "styled-components"

export const NumberInputContainer = styled.div`
  display: inline;

  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["base-button"]};

  button {
    line-height: 0;
    color: ${(props) => props.theme.purple};
    border: none;
    background: transparent;

    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme["purple-dark"]};
    }

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }

  input {
    width: 2rem;
    border: none;
    background: transparent;
    color: ${(props) => props.theme["base-title"]};

    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height: 130%;

    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
    }
  }

  /* Remove arrows for number inputs */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: none;
  }
`
