import React from 'react';
import renderer from 'react-test-renderer';
import Cart from '.';

describe("Cart Container ",()=>{
    it("should render ",()=>{
        const tree = renderer.create(<Cart/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})