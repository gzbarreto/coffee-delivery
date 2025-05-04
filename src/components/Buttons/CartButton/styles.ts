import styled from "styled-components"

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  margin: 0.5rem 0 0 0;

  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};

  border: none;
  border-radius: 6px;

  padding: 0.5rem;

  cursor: pointer;
  transition: border 0.2s;

  border: 1px solid transparent;

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