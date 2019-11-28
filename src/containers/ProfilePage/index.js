import React from 'react'
import { connect } from 'react-redux'
import OrderHistoryCard from '../../components/OrderHistoryCard'
import { PageContainer, AccountContainer, AddressDetail, AddressDetailTitle, OrderHistory, OrderHistoryTitle, EditAccountDetailButton, EditAddressDetailButton, EditDetailButton } from './styled'
import EditIcon from "@material-ui/icons/EditOutlined";

const mockOrder = {
    totalPrice: 20,
    restaurantName: "Habibs",
    createdAt: 1574659218053,
    expiresAt: 1574662818053,
}
export class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <PageContainer>
                <AccountContainer>
                    <span>Bruna Oliveira</span>
                    <span>bruna_o@gmail.com</span>
                    <span>333.333.333-33</span>
                    <EditDetailButton><EditIcon/></EditDetailButton>
                </AccountContainer>
                <AddressDetail>
                    <AddressDetailTitle> Endereco cadastrado</AddressDetailTitle>
                    <span> Rua Alessandra Vieira, 42 - Santana</span>
                    <EditDetailButton><EditIcon/></EditDetailButton>
                </AddressDetail>
                <OrderHistory>
                    <OrderHistoryTitle>Histórico de pedidos</OrderHistoryTitle>
                    <OrderHistoryCard order={mockOrder}/>
                    <OrderHistoryCard order={mockOrder}/>
                    <OrderHistoryCard order={mockOrder}/>
                </OrderHistory>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
