import {shallow} from 'enzyme'
import FeedPage from '.'
import React from 'react'
import FilterMenu from '../../components/FilterMenu'



describe("FeedPage", () => {
    it("should render input, filter", () => {
        const component = shallow(<FeedPage />);

        const input = component.find({id: "searchStyledInput"});

        const filter = component.find(FilterMenu);

        expect(input).toHaveLength(1);
        expect(filter).toHaveLength(1);
    })
})