import styled from "styled-components"

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  border: none;
  border-radius: 6px;

  padding: 0.4rem 0.5rem;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;
  transition: background-color 0.2s;

  span {
    color: ${(props) => props.theme["purple"]};
    line-height: 0;
    
   }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
    span {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`
