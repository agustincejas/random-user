import styled, { css } from "styled-components"

export const StyledLabelProperty = styled.label`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 8px;
  ${(props) => props.title
    ? highlightedLabelElement
    : ''
  };
`
export const StyledProperty = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${(props) => props.title
    ? highlightedImgElement
    : ''
  }
  `

export const highlightedImgElement = css`
  background-color: #EA4C89;
`

export const highlightedLabelElement = css`
  color: #EA4C89;
  opacity: 0.5;
`

export const StyledImage = styled.img`
  width: 80%;
`