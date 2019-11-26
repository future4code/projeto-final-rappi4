import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    EndEntrega, ItensCarrinhoWrapper, NavBar, AppWrapper,
    AppBar, TitleAppBar, EndWrapper, EndEntregaCliente, Frete, SubTotalWrapper,
    SubTotal, SubTotalValor, FormaPagamento, FormStyled, DividerStyled, ButtonStyled
} from './theme'

export class Carrinho extends Component {
    super(props) {
        this.state = {

        }
    }
    render() {

        return (
            <AppWrapper>
                <AppBar>
                    <TitleAppBar>Carrinho</TitleAppBar>
                </AppBar>
                <EndWrapper>
                    <EndEntrega> Endereco de entrega</EndEntrega>
                    <EndEntregaCliente> Rua 1, 32</EndEntregaCliente>
                </EndWrapper>
                <ItensCarrinhoWrapper>
                    <p> Carrinho vazio</p>
                </ItensCarrinhoWrapper>
                <Frete>Frete R$10,00</Frete>
                <SubTotalWrapper>
                    <SubTotal>SUBTOTAL   </SubTotal>
                    <SubTotalValor>R$0,00</SubTotalValor>
                </SubTotalWrapper>
                <FormaPagamento>Forma de Pagamento</FormaPagamento>
                <DividerStyled />
                
                    <FormStyled >
                        <input type="radio" name="formaPagamento" value="Dinheiro" /> Dinheiro <br/>
                        <input type="radio" name="formaPagamento" value="CartaoCredito" /> Cartão de Crédito
                    </FormStyled>
                <ButtonStyled>Confirmar</ButtonStyled>
                <NavBar>
                    Aqui vai a nav Bar, fixa no final
                </NavBar>
            </AppWrapper>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Carrinho)
