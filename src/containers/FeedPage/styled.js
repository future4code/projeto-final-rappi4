import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'

export const FeedPageContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    > * {
        margin-top: 8px
    }
`

export const StyledInput = styled(TextField)`
    fieldset{
        border-radius: 2px;
    }
`
