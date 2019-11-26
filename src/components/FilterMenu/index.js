import React, { useState } from 'react'
import { StyledTabs, StyledTab } from './styled'

export default function FilterMenu(props) {
    const [state, setstate] = useState(0)

    return (
        <div>
           <StyledTabs id="searchStyledTabs" value={state} onChange={(event, value) => setstate(value)} variant="scrollable" indicatorColor="primary" textColor="primary" scrollButtons="auto">
                <StyledTab id="searchStyledTab" label="Teste"/>
                <StyledTab label="1"/>
                <StyledTab label="2"/>
                <StyledTab label="3"/>
                <StyledTab label="5"/>
                <StyledTab label="9"/>
           </StyledTabs> 
        </div>
    )
}
