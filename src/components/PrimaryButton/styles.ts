import styled from "styled-components"

export const PrimaryButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  border: none;
  border-radius: 6px;

  padding: 0.75rem 0.5rem;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`
