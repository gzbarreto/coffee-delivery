import styled from 'styled-components'; 

export const ConfirmationContainer = styled.div`
  display: flex;
  align-items: center;  
  justify-content: space-between;
  margin: 5rem;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.25rem;

h1 {
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
}

p {
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
}
`

export const SummaryContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
padding: 2.5rem;
margin-top: 2.5rem;
border-radius: 6px 36px 6px 36px;
border: 2px solid ${(props) => props.theme['yellow-light']};
`

export const ItemContainer = styled.div`
display: flex;
align-items: center; 
gap: 0.75rem;

div {
  display: flex;
  flex-direction: column;

}
`