import React from 'react'
import { StyledCardContainer, StyledImg, StyledCardContent, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledButton, StyledCounter, StyledImgWrapper, StyledRemoveButton, StyledAddButton } from './styled';


export default function ProductCard(props) {

    const handleClickAddButton = () => {
        props.onClickAddButton(props.product.id)
    }

    const handleClickRemoveButton = () => {
        props.onClickRemoveButton(props.product.id)
    }

    const renderCartQuantity = props.product.quantity ? <StyledCounter>{props.product.quantity}</StyledCounter> : null

    const removeFromCartButton = props.product.quantity ? <StyledRemoveButton onClick={handleClickRemoveButton}>Remover</StyledRemoveButton> : <StyledAddButton onClick={handleClickAddButton}>Adicionar</StyledAddButton>

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
            {renderCartQuantity}
            {removeFromCartButton}
        </StyledCardContainer>
    )
}
