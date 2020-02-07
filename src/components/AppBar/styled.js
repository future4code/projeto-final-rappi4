import styled from 'styled-components'

export const AppBarStyled = styled.div`
    height: 44px;
    width: 50vh;
    margin-bottom: 1px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

export const TitleAppBarStyled = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`

export const ArrowBackStyled = styled.div`
    justify-content:center;
    align-items:center;
    align-self:center;
    text-align: center;
`