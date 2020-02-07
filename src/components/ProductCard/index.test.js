import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from './index';



describe("Product Card",()=>{
    it("should render ",()=>{
        const mockCard = {
            "id": "CnKdjU6CyKakQDGHzNln",
            "category": "Salgado",
            "price": "1",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
            "name": "Bibsfiha carne",
            "description": "Esfiha deliciosa, receita secreta do Habibs."
        }

        const tree = renderer.create(<ProductCard product={mockCard}/>).toJSON();

        expect(tree).toMatchSnapshot();
    })
})