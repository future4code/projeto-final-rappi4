import React from 'react'
import { AppBarStyled, TitleAppBarStyled, ArrowBackStyled } from './styled'
import ArrowBack from '@material-ui/icons/ArrowBackIos';

export default function AppBar(props) {
    const ArrowBackVisible = props.ArrowBackVisible ?
        <ArrowBackStyled onClick={props.onClickBackIcon}>
            <ArrowBack/>
        </ArrowBackStyled> : null
    return (
        <div>
            <AppBarStyled>
                {/* PASSAR COMO PROPS O DISPATCH GO BACK */}
                {ArrowBackVisible}
                {/* PASSAR COMO PROPS O TITULO DA PAGINA */}
                <TitleAppBarStyled>{props.title}</TitleAppBarStyled>
                <div></div>
            </AppBarStyled>
        </div>
    )
}