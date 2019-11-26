import React from 'react'
import { StyledCardContainer, StyledImg, StyledCardContent, StyledTitleSpan, StyledContentSpan, StyledPriceSpan, StyledButton, StyledCounter } from './styled';


export default function ProductCard(props) {
    const mockCard = {
        "id": "CnKdjU6CyKakQDGHzNln",
        "category": "Salgado",
        "price": "1",
        "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
        "name": "Bibsfiha carne",
        "description": "Esfiha deliciosa, receita secreta do Habibs."
    }
    return (
        <StyledCardContainer>
            <StyledImg src={mockCard.photoUrl} />
            <StyledCardContent>
                <StyledTitleSpan>{mockCard.name}</StyledTitleSpan>
                <StyledContentSpan>{mockCard.description}</StyledContentSpan>
                <StyledPriceSpan>R$ 0{mockCard.price},00</StyledPriceSpan>
            </StyledCardContent>
            <StyledCounter>2</StyledCounter>
            <StyledButton>adicionar</StyledButton>
        </StyledCardContainer>
    )
}
