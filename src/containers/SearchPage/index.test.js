import React from 'react';
import renderer from 'react-test-renderer';
import SearchPage from './index';

describe("SearchPage",()=>{
    it("should render ",()=>{
        const tree = renderer.create(<SearchPage/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})