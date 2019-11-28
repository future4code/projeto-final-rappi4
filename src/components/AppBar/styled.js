import styled from 'styled-components'
import ArrowBack from '@material-ui/icons/ArrowBackIos';

export const AppBarStyled = styled.div`
    height: 44px;
    margin-bottom:1px;
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content:center;
    align-items:center;
    align-self:center;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
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