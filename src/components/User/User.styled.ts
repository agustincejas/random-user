import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  gap: 16px;
  box-shadow: 1px 1px 5px #f7d9ff;
`

export const StyledNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding-top: 8px;
`

export const StyledThumbnail = styled.div`
  padding-left: 4px;
`

export const Thumbnail = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
`

export const StyledName = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding-right: 8px;
`

export const StyledCountry = styled.div`
  padding-bottom: 10px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`