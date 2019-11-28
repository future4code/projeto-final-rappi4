import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CartItensWrapper, NavBar, AppWrapper, Frete, SubTotalWrapper,
    SubTotal, SubTotalValue, Payment, DividerStyled, StyledTitle, StyledAdress, StyledTime,
    StyledRestContent, ProductsWrapper, DeliveryAdress, DeliveryAdressClient, AdressWrapper,
    StyledRadio, StyledFormControl, FormControlLabelSyled
} from './style'
import { FormControl, RadioGroup, FormControlLabel, Radio, Snackbar } from '@material-ui/core'
import { StyledBtn } from '../Button/Button'
import { placeOrder } from '../../actions/cart'
import { snackBarClose } from '../../actions/snackBar'
import { MySnackbarContentWrapper } from '../../components/SnackBar'
import AppBar from '../../components/AppBar'
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { ArrowBackStyled } from '../../components/AppBar/styled'

//TODO AJUSTAR STYLO DO RADIO
const FormControlControl = <StyledRadio />

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

    handleClose = () => {
        this.props.snackBarClose()
    };

    onSetOrder = () => {
        this.props.placeOrder()
    }
    clickBackIcon = () => {
        console.log("clicouVoltar")
    }

    render() {
        const { currentOrder } = this.props
        return (
            <AppWrapper>
                {/* <AppBar>
                    <TitleAppBar>Carrinho</TitleAppBar>
                </AppBar> */}
                <AppBar
                    title={'Meu Carrinho'}
                    onClickBackIcon={this.clickBackIcon}
                    ArrowBackVisible={<ArrowBack/>}
                />
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
                <StyledFormControl component="fieldset" >
                    <RadioGroup
                        aria-label="Forma Pagamento"
                        name="Forma Pagamento"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabelSyled
                            value="Dinheiro"
                            control={FormControlControl}
                            label="Dinheiro"

                        />
                        <FormControlLabelSyled
                            value="Cartão de Crédito"
                            control={FormControlControl}
                            label="Cartão de Crédito"

                        />
                    </RadioGroup>
                </StyledFormControl>
                <StyledBtn onClick={this.onSetOrder}>Confirmar</StyledBtn>

                <NavBar>
                    Aqui vai a nav Bar, fixa no final
                </NavBar>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.props.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant={this.props.variant}
                        message={this.props.msg}
                    />
                </Snackbar>
            </AppWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    currentOrder: state.cart.order,
    msg: state.snackBar.msg,
    variant: state.snackBar.variant,
    open: state.snackBar.open,
})
const mapDispatchToProps = dispatch => ({
    placeOrder: () => dispatch(placeOrder()),
    snackBarClose: () => dispatch(snackBarClose()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
