import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CartItensWrapper, NavBar, AppWrapper,
    AppBar, TitleAppBar, Frete, SubTotalWrapper,
    SubTotal, SubTotalValue, Payment, DividerStyled,
     ButtonStyled, StyledTitle, StyledAdress, StyledTime,
      StyledRestContent, ProductsWrapper, DeliveryAdress, DeliveryAdressClient, AdressWrapper
} from './style'
import ProductCard from '../../components/ProductCard'

import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

//TODO AJUSTAR STYLO DO RADIO
const FormControlControl = <Radio style={{padding:0, color:'black'}} />
const FormControlStyle = {marginLeft:'16px', marginBottom:'8px'}

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: '',
        }
    }
    handleChange = event => {
        this.setState({ selectedValue: event.target.value });
      };
    render() {
        
        return (
            <AppWrapper>
                <AppBar>
                    <TitleAppBar>Carrinho</TitleAppBar>
                </AppBar>
                <AdressWrapper>
                    <DeliveryAdress> Endereco de entrega</DeliveryAdress>
                    <DeliveryAdressClient>Endereco do cliente</DeliveryAdressClient>
                </AdressWrapper>
                <CartItensWrapper>
                    <StyledRestContent>
                        <StyledTitle>Restaurante bom</StyledTitle>
                        <StyledAdress>Rua 2, 344</StyledAdress>
                        <StyledTime>30 - 40</StyledTime>
                    </StyledRestContent>
                    <ProductsWrapper>
                    {/* <ProductCard/>
                    <ProductCard/> */}
                    </ProductsWrapper>
                </CartItensWrapper>
                <Frete>Frete R$10,00</Frete>
                <SubTotalWrapper>
                    <SubTotal>SUBTOTAL   </SubTotal>
                    <SubTotalValue>R$0,00</SubTotalValue>
                </SubTotalWrapper>
                <Payment>Forma de Pagamento</Payment>
                <DividerStyled />
                <FormControl component="fieldset" >
          <RadioGroup
            aria-label="Forma Pagamento"
            name="Forma Pagamento"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="Dinheiro"
              control={FormControlControl}
              label="Dinheiro"
              style={FormControlStyle}
            />
            <FormControlLabel
              value="Cartão de Crédito"
              control={FormControlControl}
              label="Cartão de Crédito"
              style={FormControlStyle}
            />
          </RadioGroup>
        </FormControl>
                <ButtonStyled>Confirmar</ButtonStyled>
                <NavBar>
                    Aqui vai a nav Bar, fixa no final
                </NavBar>
            </AppWrapper>
        )
    }
}

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Cart)
export default Cart
