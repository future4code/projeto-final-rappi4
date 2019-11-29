import React from 'react';
import renderer from 'react-test-renderer';
import { ProfilePage } from './index';
const mockProfile = {
    id: "",
    name: "",
    email: "",
    cpf: "",
    hasAddress: false,
    address: "",
    orders: []
}
describe("ProfilePage",()=>{
    it("should render",()=>{
        const tree = renderer.create(<ProfilePage profile={mockProfile} fetchProfile={()=>jest.fn()} fetchOrderHistory={()=>jest.fn()}/> ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
