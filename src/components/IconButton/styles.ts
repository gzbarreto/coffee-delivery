import styled from "styled-components"

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;


  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
