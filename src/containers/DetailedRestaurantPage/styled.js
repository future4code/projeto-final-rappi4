import styled from 'styled-components'
import { FormControl} from '@material-ui/core'

export const DetailedRestaurantWrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    > * {
        margin-top: 8px
    }
`

export const StyledForm = styled(FormControl)`
width: 100%;
`

export const StyledHr = styled.hr`
border: 0.5px solid black;
`