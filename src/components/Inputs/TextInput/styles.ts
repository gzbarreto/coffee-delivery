import styled, { css } from "styled-components"

interface TextInputContainerProps {
  hasFocus: boolean
  area?: string;
}

export const TextInputContainer = styled.div<TextInputContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;
  padding: 0.75rem;
  border-radius: 4px;
  grid-area: ${(props) => props.area || null};

  width: 100%;
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};

  ${(props) =>
    props.hasFocus &&
    css`
      border-color: ${(props) => props.theme["yellow-dark"]};
    `}

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;

    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 130%;

    &:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  span {
    font-size: 0.75rem;
    font-style: italic;

    color: ${(props) => props.theme["base-label"]};
  }
`
