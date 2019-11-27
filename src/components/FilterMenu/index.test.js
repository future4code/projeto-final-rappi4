import React from 'react';
import renderer from 'react-test-renderer';
import FilterMenu from '.';

describe("Product Card",()=>{
    it.skip("should render ",()=>{
        const tree = renderer.create(<FilterMenu/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})