import React from 'react';
import renderer from 'react-test-renderer';
import OrderHistoryCard from './index';


describe("OrderHistoryCard",()=>{
    it("should render",()=>{
        const mockOrder = {
            totalPrice: 20,
            restaurantName: "Habibs",
            createdAt: 1574659218053,
            expiresAt: 1574662818053,
        }
        const tree = renderer.create(<OrderHistoryCard order={mockOrder}/>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})