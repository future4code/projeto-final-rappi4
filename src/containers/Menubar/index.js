import React, { useState } from 'react'
import { StyledMenuContainer, StyledIconButton } from './styled'
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ProfileIcon from '@material-ui/icons/PersonOutline';

export default function MenuBar(props) {
    const [state, setstate] = useState(0)
    const handleClick = (event ,value)=>{
        console.log(event,value)
    }
    return (
        <StyledMenuContainer>
            <StyledIconButton value="t" onClick={handleClick}> <HomeIcon /> </StyledIconButton>
            <StyledIconButton> <CartIcon /> </StyledIconButton>
            <StyledIconButton> <ProfileIcon /> </StyledIconButton>
        </StyledMenuContainer>
    )
}
