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
import { setProductQuantity, removeProductFromCart, fetchDetailedRestaurant } from '../../actions/restaurant'


class DetailedRestaurantPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            selectedValue: 0,
            productId: ''
        }
    }

    componentDidMount(){
       const {id} = this.props.match.params
       this.props.fetchDetailedRestaurant(id);
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

        const {category,description,address,shipping,deliveryTime,logoUrl,name} = this.props.restaurant

        const restaurant = {category,description,address,shipping,deliveryTime,logoUrl,name};

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
                <RestaurantCard restaurant={restaurant} detailedCard/>
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
    products: state.detailedRestaurant.products,
    restaurant: state.detailedRestaurant
})

const mapDispatchToProps = dispatch => ({
    setProductToId: (id, quantity) =>  dispatch(setProductQuantity(id, quantity)),
    removeFromCart: (id) => dispatch(removeProductFromCart(id)),
    fetchDetailedRestaurant: (id) => dispatch(fetchDetailedRestaurant(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailedRestaurantPage)