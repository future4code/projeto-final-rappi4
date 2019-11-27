import React from 'react'
import { StyledCardContainer, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledCardContent } from './styled';


export default function OrderDetails(props) {
    const mockCard = {
        "totalPrice": 20,
        "restaurantName": "Habibs",
        "createdAt": 1574659218053,
        "expiresAt": 1574662818053
    }
    return (
        <StyledCardContainer>
            <StyledCardContent>
                <StyledTitleSpan>{mockCard.restaurantName}</StyledTitleSpan>
                <StyledContentSpan>{mockCard.createdAt}</StyledContentSpan>
                <StyledPriceSpan>SUBTOTAL R$ {mockCard.totalPrice},00</StyledPriceSpan>
            </StyledCardContent>
        </StyledCardContainer>
    )
}