import React from 'react';
import renderer from 'react-test-renderer';
import { ProfilePage } from './index';

describe("ProfilePage",()=>{
    it("should render",()=>{
        const tree = renderer.create(<ProfilePage/>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})
