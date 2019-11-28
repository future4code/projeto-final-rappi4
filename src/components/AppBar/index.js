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
{/* <AppBar
    title={'Meu Carrinho'}
    onClickBackIcon={this.clickBackIcon}
    ArrowBackVisible={<ArrowBack />}
/>
import ArrowBack from '@material-ui/icons/ArrowBackIos';
 */}