import React, { Component } from 'react'
import FilterMenu from '../../components/FilterMenu'
import { FeedPageContainer } from './styled'
import RestaurantCard from '../../components/RestaurantCard/index';
import MenuBar from '../Menubar/index';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router/index';
import SearchInput from '../../components/SearchInput'
import { fetchRestaurantsAction } from '../../actions/restaurant';
import restaurants from '../../reducers/restaurants';


export class FeedPage extends Component {


    componentDidMount(){
        this.props.fetchRestaurants();
    }

    handleInputClick = () => {
        this.props.goToSearch();
    }

    handleCardClick = (id) => {
        this.props.goToDetailedRestaurant(id);
    }
    render() {
        const { allRestaurants} = this.props
        const restaurants = allRestaurants.map(restaurant => <RestaurantCard restaurant={restaurant} onCardClick={this.handleCardClick}/>)
        return (
            <FeedPageContainer>
                <SearchInput onClick={this.handleInputClick} />
                <FilterMenu />
                <RestaurantCard restaurant={mockRestaurant}/>
                <MenuBar/>
                {restaurants}
            </FeedPageContainer>
        )
    }
}
const mapStateToProps = (state) => ({
    allRestaurants: state.restaurants.restaurants,
})
const mapDispatchToProps = (dispatch) => ({
    goToSearch: () => dispatch(push(routes.search)),
    fetchRestaurants: ()=> dispatch(fetchRestaurantsAction()),
    goToDetailedRestaurant: (id) => dispatch(push(`/restaurant/${id}`))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)
