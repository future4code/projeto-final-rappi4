import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from "connected-react-router";
import { routes } from "../Router";
import { getPerfil } from "../../actions/auth";
import RestaurantCard from '../../components/OrderDetailsCard'
import {
    AppWrapper, AppBar, TitleAppBar, TopoWrapper, ClientName, ClientEmail, ClientCPF, MiddleWrapper, EndEntrega, EndEntregaCliente, HistoricoPedidos, DividerStyled, NavBar
} from './styled'


 class PerfilPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <AppWrapper>
                <AppBar>
                    <TitleAppBar>Meu Perfil</TitleAppBar>
                </AppBar>
                <TopoWrapper>
                    <ClientName>Bruna Oliveira</ClientName>
                    <ClientEmail>bruna_o@gmail.com</ClientEmail>
                    <ClientCPF>333.333.333-33</ClientCPF>
                </TopoWrapper>  
                <MiddleWrapper>
                    <EndEntrega> Endereco cadastrado</EndEntrega>
                    <EndEntregaCliente> Rua Alessandra Vieira, 42 - Santana</EndEntregaCliente>
                </MiddleWrapper>
                <HistoricoPedidos>Histórico de pedidos</HistoricoPedidos>
                <DividerStyled />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <NavBar>
                    Aqui vai a nav Bar, fixa no final
                </NavBar>
            </AppWrapper>  
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilPage)
