import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';

export const AppWrapper = styled.div`
    width: 360px;
    display:flex;
    flex-direction:column;
    height: 600px;
    font-family: Roboto;
`

export const AppBar = styled.div`
    height: 44px;
    width:145px;
    margin-bottom:1px;
    display:flex;
    justify-content:center;
    align-items:center;
    align-self:center;
    padding: 0 16px;
`
export const TitleAppBar = styled.div`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
`

export const EndWrapper = styled.div`
    height: 76px;
    background-color: #eeeeee;
    margin-bottom:8px;
    padding: 0 16px;
`
export const ItensCarrinhoWrapper = styled.div`
    height: 42px;
    display:flex;
    align-items:center;
    align-self:center;
    padding: 0 16px;
`

export const NavBar = styled.div`
    height: 49px;
`

export const EndEntrega = styled.div`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-top:16px;
    margin-bottom:8px;
`

export const EndEntregaCliente = styled.div`
    width: 328px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    margin-bottom:8px;
`

export const Frete = styled.div`
    width: 104px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: var(--black);
    align-self:flex-end;
    padding-right:16px;
    margin-bottom:14px;
`

export const TotalWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    margin-bottom:24px;
`

export const SubTotalWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 0 16px;
    margin-bottom:25px;
`

export const FormaPagamento = styled.div`
    width: 360px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
    padding: 0 16px;
    margin-bottom:8px;
`

export const SubTotal = styled.div`
    width: 164px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`

export const SubTotalValor = styled.div`
    width: 164px;
    height: 21px;
    font-family: Roboto;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e86e5a;
`

export const DividerStyled = styled(Divider)`
    margin-bottom:8px;
`
export const TipoPagamento = styled.div`
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--black);
`
export const FormStyled = styled.form`
    margin-bottom:14px;
    padding: 0 16px;

`
export const ButtonStyled = styled.button`
    width: 328px;
    height: 42px;
    border-radius: 2px;
    background-color: #e86e5a;
    align-self:center;
`
