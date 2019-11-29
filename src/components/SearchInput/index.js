import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { StyledInput } from './styled';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function SearchInput(props) {
    return (
        <React.Fragment>
            <StyledInput variant="outlined" value={props.value} onChange={props.onChange} onClick={props.onClick}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
        </React.Fragment>
    )
}
