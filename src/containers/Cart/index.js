import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    CartItensWrapper, NavBar, AppWrapper, Frete, SubTotalWrapper,
    SubTotal, SubTotalValue, Payment, DividerStyled, StyledTitle, StyledAdress, StyledTime,
    StyledRestContent, ProductsWrapper, DeliveryAdress, DeliveryAdressClient, AdressWrapper,
    StyledRadio, StyledFormControl, FormControlLabelSyled
} from './style'
import { FormControl, RadioGroup, FormControlLabel, Radio, Snackbar } from '@material-ui/core'
import { StyledBtn } from '../../components/Button/Button'
import { placeOrder } from '../../actions/cart'
import { snackBarClose } from '../../actions/snackBar'
import { MySnackbarContentWrapper } from '../../components/SnackBar'
import AppBar from '../../components/AppBar'
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import { fetchProfileAction } from '../../actions/profile';
import ProductCard from '../../components/ProductCard'

//TODO AJUSTAR STYLO DO RADIO
const FormControlControl = <StyledRadio />

export class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: '',
        }
    }
    componentDidMount(){
        this.props.fetchProfile();
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
        const {category,description,shipping,deliveryTime,logoUrl,name} = this.props.orderDetailedRestaurant
        const restaurantAddress = this.props.orderDetailedRestaurant.address
        const restaurant = {category,description,address,shipping,deliveryTime,logoUrl,name};
        const shippingTime = deliveryTime ? `${deliveryTime} min`:""
        const {address} = this.props.profile

        let productOrders = this.props.orderDetailedRestaurant.products.filter(product=> product.quantity > 0);
        productOrders = productOrders.map(product => <ProductCard product={product}/>)
        return (
            <AppWrapper>
                <AppBar
                    title={'Meu Carrinho'}
                    onClickBackIcon={this.clickBackIcon}
                    ArrowBackVisible={<ArrowBack/>}
                />
                <AdressWrapper>
                    <DeliveryAdress> Endereco de entrega</DeliveryAdress>
                    <DeliveryAdressClient>{address}</DeliveryAdressClient>
                </AdressWrapper>
                <CartItensWrapper>
                    <StyledRestContent>
                        <StyledTitle>{restaurant.name}</StyledTitle>
                        <StyledAdress>{restaurantAddress}</StyledAdress>
                        <StyledTime>{shippingTime}</StyledTime>
                    </StyledRestContent>
                    <ProductsWrapper>
                        {productOrders}
                    </ProductsWrapper>
                </CartItensWrapper>
                <Frete>Frete R$ {restaurant.shipping ? restaurant.shipping:"00"},00</Frete>
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
    orderDetailedRestaurant: state.detailedRestaurant,
    profile: state.profile
})
const mapDispatchToProps = dispatch => ({
    placeOrder: () => dispatch(placeOrder()),
    snackBarClose: () => dispatch(snackBarClose()),
    fetchProfile: ()=> dispatch(fetchProfileAction()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)