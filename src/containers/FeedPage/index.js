import React, { Component } from 'react'
import FilterMenu from '../../components/FilterMenu'
import { FeedPageContainer, StyledInput } from './styled'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import RestaurantCard from '../../components/RestaurantCard/index';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
import SearchInput from '../../components/SearchInput'


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

export class FeedPage extends Component {

    handleInputClick = () => {
        this.props.goToSearch();
    }
    render() {
        return (
            <FeedPageContainer>
                <SearchInput onClick={this.handleInputClick} />
                <FilterMenu />
                <RestaurantCard restaurant={mockRestaurant} />
            </FeedPageContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    goToSearch: () => dispatch(push(routes.search))
});

export default connect(null, mapDispatchToProps)(FeedPage)
