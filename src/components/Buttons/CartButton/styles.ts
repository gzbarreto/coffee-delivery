import styled from "styled-components"

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  padding: 0.5rem;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border: 1px solid transparent;
  border-radius: 6px;

  cursor: pointer;
  transition: border 0.2s;

  &:hover {
    border: 1px solid ${(props) => props.theme["yellow"]};
  }
`
export const BadgeContainer = styled.div`
  position: relative;
  top: -3rem;
  right: -1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.25rem;
  height: 1.25rem;

  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme.white};

  border-radius: 50%;

  font-size: 0.75rem;
`