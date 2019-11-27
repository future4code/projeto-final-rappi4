import styled from 'styled-components'

export const StyledRestaurantCard = styled.section`
height: 188px;
border-radius: 8px;
border: solid 1px #b8b8b8;
display: flex;
flex-direction: column;
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
