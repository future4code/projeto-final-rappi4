import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';

export const PageContainer = styled.section`
    width: 100vw;
    display:flex;
    flex-direction:column;
`

export const AccountContainer = styled.section`
    padding: 16px;
    > :not(:first-child):not(button){
        margin-top:8px;
        font-size: 16px;
        display: block;
    }
    position: relative;
`
export const EditDetailButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    color: black;
`
export const AddressDetail = styled.section`
    height: 76px;
    background-color: #eeeeee;
    padding: 16px;
    > :not(:first-child){
        margin-top:8px;
        font-size: 16px;
        display: block;
    }
    position: relative;
`
export const EditAddressDetailButton = styled(IconButton)`
    position: absolute;
    top: 0;
    right: 0;
    color: black;
`

export const AddressDetailTitle = styled.span`
    height: 18px;
    font-size: 16px;
    color: #b8b8b8;   
`

export const OrderHistory = styled.section`
    font-size: 16px;
    padding: 16px;
    > *{
        margin-bottom: 8px;
    }
`

export const OrderHistoryTitle = styled.span`
    display:block;
    padding-bottom: 8px;
    border-bottom: 1px solid;
`