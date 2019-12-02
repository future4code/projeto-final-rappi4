import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import  Button  from '@material-ui/core/Button';
import { ButtonBase } from '@material-ui/core';

export const StyledMenuContainer = styled.section`
    position: absolute;
    bottom: 0;
    left:0;
    width: 100vw;
    box-shadow: -6px 3px 6px rgba(0,0,0,0.50);
    display: flex;
    justify-content: space-around;
`
export const StyledMenu = styled.div`

`
export const StyledIconButton = styled(ButtonBase)`
    flex:1;
    height: 50px;
`