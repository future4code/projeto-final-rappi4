import React from 'react'
import { StyledCardContainer, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledCardContent } from './styled';


export default function OrderHistoryCard(props) {
    const orderDate = new Date(props.order.createdAt).toLocaleDateString();
    return (
        <StyledCardContainer>
            <StyledTitleSpan>{props.order.restaurantName}</StyledTitleSpan>
            <StyledContentSpan>{orderDate}</StyledContentSpan>
            <StyledPriceSpan>SUBTOTAL R$ {props.order.totalPrice},00</StyledPriceSpan>
        </StyledCardContainer>
    )
}