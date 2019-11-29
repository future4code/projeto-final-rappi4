import React from 'react'
import { AppBarStyled, TitleAppBarStyled, ArrowBackStyled } from './styled'

export default function AppBar(props) {
    return (
        <div>
            <AppBarStyled>
                {/* PASSAR COMO PROPS O DISPATCH GO BACK */}
                <ArrowBackStyled onClick={props.onClickBackIcon}>
                    {props.ArrowBackVisible}
                </ArrowBackStyled>
                {/* PASSAR COMO PROPS O TITULO DA PAGINA */}
                <TitleAppBarStyled>{props.title}</TitleAppBarStyled>
                <div></div>
            </AppBarStyled>
        </div>
    )
}