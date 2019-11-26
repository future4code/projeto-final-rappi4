import React, { Component } from 'react'
import FilterMenu from '../../components/FilterMenu'
import { FeedPageContainer, StyledInput } from './styled'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'




export default class FeedPage extends Component {
    render() {
        return (
            <FeedPageContainer>
                <StyledInput id="searchStyledInput" variant="outlined"
                    InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                    }}  
                />
                <FilterMenu />
            </FeedPageContainer>
        )
    }
}
