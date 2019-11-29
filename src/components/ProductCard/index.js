import React from 'react'
import { StyledCardContainer, StyledImg, StyledCardContent, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledButton, StyledCounter, StyledImgWrapper } from './styled';


export default function ProductCard(props) {

    return (
        <StyledCardContainer>
            <StyledImgWrapper>
                <StyledImg src={props.product.photoUrl} />
            </StyledImgWrapper>
            <StyledCardContent>
                <StyledTitleSpan>{props.product.name}</StyledTitleSpan>
                <StyledContentSpan>{props.product.description}</StyledContentSpan>
                <StyledPriceSpan>R$ {props.product.price},00</StyledPriceSpan>
            </StyledCardContent>
            <StyledCounter>2</StyledCounter>
            <StyledButton onClick={props.onClickAddButton}>adicionar</StyledButton>
        </StyledCardContainer>
    )
}
