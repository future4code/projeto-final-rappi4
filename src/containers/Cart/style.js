import styled from 'styled-components'
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { FormControl, FormControlLabel } from '@material-ui/core';

export const AppWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height: 600px;
    font-family: Roboto;
`

export const CartItensWrapper = styled.div`
    display:flex;
    align-items:center;
    align-self:center;
    flex-direction:column;
    /* padding:0 16px; */
`

export const NavBar = styled.div`
    height: 49px;
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
    margin-top:8px;
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

export const Payment = styled.div`
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

export const SubTotalValue = styled.div`
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
    margin: 0 16px 8px 16px;
    background-color:black; 
`

export const ButtonStyled = styled.button`
    height: 42px;
    border-radius: 2px;
    background-color: #e86e5a;
    align-self:center;
    margin:0;
    border:0;
    width:100vw;
`
export const StyledRestContent = styled.div`
    padding: 16px;
    width:100vw;
`
export const ProductsWrapper = styled.div`
    padding: 0 16px;
    display:flex;
    flex-direction:column;
`

export const StyledTitle = styled.div`
    display: block;
    color: #e86e5a;
    font-size: 16px;
    margin-bottom: 8px; 
`
export const StyledAdress = styled.div`
    display: block;
    font-size: 16px;
    color: #b8b8b8;
    margin-bottom: 8px;
`
export const StyledTime = styled.div`
    display: block;
    font-size: 16px;
    color: #b8b8b8;
`

export const DeliveryAdress = styled.div`
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
    margin-bottom:8px;
`

export const DeliveryAdressClient = styled.div`
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
`

export const AdressWrapper = styled.div`
    background-color: #eeeeee;
    padding:16px;
`

export const StyledRadio = withStyles({
  root: {
    color:"black",
    padding:"0",
  },
  
  
})(Radio);

export const StyledFormControl = withStyles({
  root: {
    margin:'0 16px',
  },
})(FormControl);

export const FormControlLabelSyled = withStyles({
  root: {
    margin:'0',
    marginBottom:'8px'
  },
  label: {
    marginLeft: '8px',
  },
})(FormControlLabel);