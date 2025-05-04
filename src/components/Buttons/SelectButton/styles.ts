import styled from "styled-components"

export const SelectContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  background-color: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};

  border: 2px solid transparent;
  border-radius: 6px;

  padding: 1rem;

  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 0.2s;

  span {
    color: ${(props) => props.theme.purple};
    line-height: 0;
  }
  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const SelectContainerSelected = styled(SelectContainer)`
  background-color: ${(props) => props.theme["purple-light"]};
  border: 2px solid ${(props) => props.theme.purple};
  :focus {
    outline: none;
  }
`
