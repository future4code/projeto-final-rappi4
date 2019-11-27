import React from 'react'
import { StyledCardContainer, StyledImg, StyledCardContent, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledButton, StyledCounter } from './styled';


export default function ProductCard(props) {

    return (
        <StyledCardContainer>
            <StyledImg src={props.product.photoUrl} />
            <StyledCardContent>
                <StyledTitleSpan>{props.product.name}</StyledTitleSpan>
                <StyledContentSpan>{props.product.description}</StyledContentSpan>
                <StyledPriceSpan>R$ 0{props.product.price},00</StyledPriceSpan>
            </StyledCardContent>
            <StyledCounter>2</StyledCounter>
            <StyledButton>adicionar</StyledButton>
        </StyledCardContainer>
    )
}
