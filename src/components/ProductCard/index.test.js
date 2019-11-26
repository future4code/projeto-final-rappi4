import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '.';

describe("Product Card",()=>{
    it("should render ",()=>{
        const tree = renderer.create(<ProductCard/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})