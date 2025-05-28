import styled from "styled-components"

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  margin: 2rem auto;
  background: ${(props) => props.theme.background};

  img {
    width: 5rem;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};

  span {
    color: ${(props) => props.theme["purple-dark"]};
    font-size: 0.875rem;
  }
`
