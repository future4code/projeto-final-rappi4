import styled from 'styled-components'

// ESTILOS NO CARD DE RESTAURANTE NORMAL:
export const StyledRestaurantCard = styled.section`
    height: 188px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    flex-direction: column;
    cursor: pointer;
`

export const StyledRestaurantImageWrapper = styled.div`
    max-height: 60%;
    border-radius: 8px 8px 0 0;
`

export const StyledRestaurantImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
`

export const StyledRestaurantTitle = styled.span`
    display: block;
    color: #e86e5a;
    font-size: 16px;
    margin-bottom: 6px;
`

export const StyledRestaurantContent = styled.div`
    padding: 16px;
`

export const StyledRestaurantInfo = styled.div`
    height: 18px;
    font-size: 16px;
    color: #b8b8b8;
    display: flex;
    justify-content: space-between;
`

// ESTILOS NO CARD DE RESTAURANTE DETALHADO:
export const StyledDetailedRestaurantCard = styled.section`
    height: 280px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`

export const StyledDetailedRestaurantContent = styled.div`
    padding: 16px 0;
`

export const StyledDetailedRestaurantInfo = styled.div`
    height: 18px;
    font-size: 16px;
    color: #b8b8b8;
    display: grid;
    row-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-content: space-between;
`

export const StyledDeliveryTime = styled.span`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
`

export const StyledShippingSpan = styled.span`
    grid-row: 2 / 3;
    grid-column: 2 / -1;
`

export const StyledAddresSpan = styled.span`
    grid-row: 3 / 4;
    grid-column: 1 / -1;
`
