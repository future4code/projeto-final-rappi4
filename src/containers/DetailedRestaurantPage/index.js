import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { DetailedRestaurantWrapper, StyledForm, StyledHr } from './styled'
import RestaurantCard from '../../components/RestaurantCard'
import ProductCard from '../../components/ProductCard'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { setProductQuantity, removeProductFromCart } from '../../actions/restaurant'


// MOCK DE TESTE PARA RENDERIZAR OS PRODUTOS 
const mockRestaurant = {
    id: "1",
    description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    shipping: 6,
    address: "Rua das Margaridas, 110 - Jardim das Flores",
    name: "Habibs",
    logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
    deliveryTime: 60,
    category: "Árabe"
}

// MOCK DO PAYLOAD QUE EU TENHO QUE ENVIAR PARA O COMPONENTE DE CARRINHO
const cartMock = {
    id: "1",
    // não enviar description para o carrinho.
    description: "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    shipping: 6,
    address: "Rua das Margaridas, 110 - Jardim das Flores",
    name: "Habibs",
    // não enviar logoUrl para o carrinho.
    logoUrl: "http://soter.ninja/futureFoods/logos/habibs.jpg",
    deliveryTime: 60,
    // não enviar category para o carrinho.
    category: "Árabe",
    products: [
        {
        id: "CnKdjU6CyKakQDGHzNln",
        // "category": "Salgado",
        price: "1",
        photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        name: "Bibsfiha carne",
        description: "Esfiha deliciosa, receita secreta do Habibs."
        },
    ]
}

class DetailedRestaurantPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            selectedValue: 0,
            productId: ''
        }
    }

    openAddToCartDialog = (id) => {
        this.setState({open: !this.state.open, productId: id})
    }

    removeProductFromCart = (id) => {
        const {removeFromCart} = this.props

        removeFromCart(id)
    }

    handleAddToCart = () => {
        const {productId, selectedValue} = this.state

        this.props.setProductToId(productId, selectedValue);

        this.setState({open: !this.state.open})
    }

    handleSelectedValue = (event) => {
        this.setState({selectedValue: event.target.value})
    }

    sortCategories = (a, b) => {
        if (a.category < b.category){
            return -1
        }
        if (a.category > b.category){
            return 1
        }
        return 0 
    }

    render() {
        const {products} = this.props;
        const {open, selectedValue, productId} = this.state;

        let uniqueCategories = products.sort(this.sortCategories);

        let lastCategory;

        const categoryList = uniqueCategories.map(product => {
            let shouldShowCategory = false;
            if (lastCategory !== product.category) {
              lastCategory = product.category
              shouldShowCategory = true
            }
            return (
              <Fragment>
                {shouldShowCategory ? (
                  <span>
                    {product.category}
                    <StyledHr/>
                  </span>
                ) : null}
                <ProductCard
                  product={product}
                  onClickAddButton={this.openAddToCartDialog}
                  onClickRemoveButton={this.removeProductFromCart}
                />
              </Fragment>
            )
        });      

        return (
            <DetailedRestaurantWrapper>
                <div className='appbar'>
                    Appbar Será aqui
                </div>
                <RestaurantCard restaurant={mockRestaurant} detailedCard/>
                {categoryList}
                <Dialog
                 open={open}
                 onClose={this.handleDialogState}
                >
                    <DialogTitle >Selecione a quantidade desejada</DialogTitle>
                    <DialogContent>
                        <StyledForm>
                            <Select value={selectedValue} onChange={this.handleSelectedValue}>
                                <MenuItem value={0}>
                                    <em>0</em>
                                </MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </StyledForm>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleDialogState}>
                        Cancelar
                        </Button>
                        <Button color="primary" onClick={this.handleAddToCart}>
                        Adicionar ao carrinho
                        </Button>
                    </DialogActions>
                </Dialog>
            </DetailedRestaurantWrapper>
        )
    }
}

const mapStateToProps = state => ({
    products: state.detailedRestaurant.products
})

const mapDispatchToProps = dispatch => ({
    setProductToId: (id, quantity) =>  dispatch(setProductQuantity(id, quantity)),
    removeFromCart: (id) => dispatch(removeProductFromCart(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRestaurantPage)