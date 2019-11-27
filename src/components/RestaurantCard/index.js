import React from 'react'
import { StyledRestaurantCard, StyledRestaurantImageWrapper, StyledRestaurantImage, StyledRestaurantContent, StyledRestaurantTitle, StyledRestaurantInfo } from './styled'

export default function RestaurantCard(props) {
    return (
        <StyledRestaurantCard>
            <StyledRestaurantImageWrapper>
                <StyledRestaurantImage src={props.restaurant.logoUrl} />
            </StyledRestaurantImageWrapper>
            <StyledRestaurantContent>
                <StyledRestaurantTitle>{props.restaurant.name}</StyledRestaurantTitle>
                <StyledRestaurantInfo>
                    <span>{props.restaurant.deliveryTime} min</span>
                    <span>Frete R$ {props.restaurant.shipping},00</span>
                </StyledRestaurantInfo>
            </StyledRestaurantContent>
        </StyledRestaurantCard>
    )
}
