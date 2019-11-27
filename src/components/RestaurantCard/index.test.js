import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantCard from '.';
const mockRestaurant = {
    "id": "1",
    "description": "Habib's é uma rede de restaurantes de comida rápida brasileira especializada em culinária árabe, os restaurantes vendem mais de 600 milhões de esfirras por ano. A empresa emprega 22 mil colaboradores e tem 421 unidades distribuídas em mais de cem municípios em 20 unidades federativas.",
    "shipping": 6,
    "address": "Rua das Margaridas, 110 - Jardim das Flores",
    "name": "Habibs",
    "logoUrl": "http://soter.ninja/futureFoods/logos/habibs.jpg",
    "deliveryTime": 60,
    "category": "Árabe"
}
describe("Product Card",()=>{
    it("should render ",()=>{
        const tree = renderer.create(<RestaurantCard restaurant={mockRestaurant}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})