import React from 'react'
import { connect } from 'react-redux'
import OrderHistoryCard from '../../components/OrderHistoryCard'
import { PageContainer, AccountContainer, AddressDetail, AddressDetailTitle, OrderHistory, OrderHistoryTitle, EditDetailButton } from './styled'
import EditIcon from "@material-ui/icons/EditOutlined";
import { fetchProfileAction, fetchOrderHistory } from '../../actions/profile';

export class ProfilePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    fetchUserDetails = () => {
        this.props.fetchProfile();
        this.props.fetchOrderHistory();
    }
    componentDidMount(){
        this.fetchUserDetails();
    }
    render() {
        const {name,email,cpf,address,orders,hasAddress} = this.props.profile;

        const allOrders = orders.map(order => <OrderHistoryCard order={order}/>);

        const showAddress = hasAddress ? address:"Nenhum endereço cadastrado :("
        return (
            <PageContainer>
                <AccountContainer>
                    <span>{name}</span>
                    <span>{email}</span>
                    <span>{cpf}</span>
                    <EditDetailButton><EditIcon/></EditDetailButton>
                </AccountContainer>
                <AddressDetail>
                    <AddressDetailTitle> Endereco cadastrado</AddressDetailTitle>
                    <span>{showAddress}</span>
                    <EditDetailButton><EditIcon/></EditDetailButton>
                </AddressDetail>
                <OrderHistory>
                    <OrderHistoryTitle>Histórico de pedidos</OrderHistoryTitle>
                    {allOrders}
                </OrderHistory>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
    fetchProfile: ()=> dispatch(fetchProfileAction()),
    fetchOrderHistory: ()=>dispatch(fetchOrderHistory())
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
