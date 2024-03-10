import styled from "styled-components";

export const StyledLayout = styled.div`
  width: 100%;
`

export const StyledSection = styled.section`
  margin-top: 200px;
  display: grid;
  place-items: center;
  gap: 10px;
`

export const StyledSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
`

export const StyledButton = styled.button`
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  outline: none;
  padding: 10px;
  color: white;
  width: 100%;
  ${(props) => props.disabled
    ? {'background-color': 'grey'}
    : ''
  }
`

export const EmptyState = styled.div`
  height: 244px;
  width: 200px;
  border: 1px solid green;
`