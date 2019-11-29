import React from 'react'
import { StyledRestaurantCard, StyledRestaurantImageWrapper, StyledRestaurantImage, StyledRestaurantContent, StyledRestaurantTitle, StyledRestaurantInfo, StyledDetailedRestaurantCard, StyledDetailedRestaurantInfo, StyledAddresSpan, StyledShippingSpan, StyledDeliveryTime, StyledDetailedRestaurantContent } from './styled'

export default function RestaurantCard(props) {
    // Retorna um card de restaurante detalhado se props.detailedCard === true
    if (props.detailedCard) {
        return (
            <StyledDetailedRestaurantCard>
                <StyledRestaurantImageWrapper>
                    <StyledRestaurantImage src={props.restaurant.logoUrl} />
                </StyledRestaurantImageWrapper>
                <StyledDetailedRestaurantContent>
                    <StyledRestaurantTitle>{props.restaurant.name}</StyledRestaurantTitle>          
                    <StyledDetailedRestaurantInfo>
                        <span>{props.restaurant.category}</span>
                        <StyledDeliveryTime>{props.restaurant.deliveryTime} min</StyledDeliveryTime>
                        <StyledShippingSpan>Frete R$ {props.restaurant.shipping},00</StyledShippingSpan>
                        <StyledAddresSpan>{props.restaurant.address}</StyledAddresSpan>
                    </StyledDetailedRestaurantInfo>
                </StyledDetailedRestaurantContent>
            </StyledDetailedRestaurantCard>
        ) 
    } else {
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
}
