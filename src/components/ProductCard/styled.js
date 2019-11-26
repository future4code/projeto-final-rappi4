import styled from 'styled-components'

export const StyledCardContainer = styled.div`
    height: 112.6px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    position: relative;
`

export const StyledImg = styled.img`
    width: 97px;
    height: 111px;
    border-radius: 8px 0 0 8px;
    background-color: #d8d8d8;
`

export const StyledCardContent = styled.div`
    padding: 16px;
`

export const StyledTitleSpan = styled.span`
    display: block;
    color: #e86e5a;
    font-size: 16px;
    margin-bottom: 6px;
`
export const StyledContentSpan = styled.span`
    display: block;
    font-size: 14px;
    color: #b8b8b8;
    margin-bottom: 6px;
`
export const StyledPriceSpan = styled.span`
    display: block;
    font-size: 16px;
`
export const StyledButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 90px;
    height: 31px;
    border: 1px solid black;
    border-radius: 8px 0 8px 0;
    background: white;
    color: black;
    font-size: 12px;
    white-space: nowrap;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
`

export const StyledCounter = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
    border: 1px solid #e86e5a;
    border-radius: 0 8px 0 8px;
    background: white;
    color: #e86e5a;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`