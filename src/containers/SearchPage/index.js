import React, { Component } from 'react'
import SearchInput from '../../components/SearchInput'

export default class SearchPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             searchString: ""
        }
    }
    
    handleSearchInput = (e) => {
        this.setState({searchString: e.target.value})
    }
    render() {
        return (
            <div>
                <SearchInput value={this.state.searchString} onChange={this.handleSearchInput}/>
            </div>
        )
    }
}
