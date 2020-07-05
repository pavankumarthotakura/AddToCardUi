import React from 'react';
import './product.css'; 
import Item from './item';

class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            data:  [
                {
                    "product_id": 10005,
                    "name": "PUMA Formal Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "RED",
                    "brandName": "PUMA",
                    "addedToCard": true
                },
                {
                    "product_id": 10006,
                    "name": "PUMA Casual Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "RED",
                    "brandName": "PUMA",
                    "addedToCard": true
                },
                {
                    "product_id": 10006,
                    "name": "PUMA Casual Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "RED",
                    "brandName": "PUMA",
                    "addedToCard": true
                },
                {
                    "product_id": 10009,
                    "name": "PUMA Casual Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "RED",
                    "brandName": "PUMA",
                    "addedToCard": true
                },
                {
                    "product_id": 10008,
                    "name": "PUMA Casual Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "RED",
                    "brandName": "PUMA",
                    "addedToCard": false
                },
                {
                    "product_id": 10007,
                    "name": "PUMA Casual Shirt",
                    "price": 1200,
                    "size": 34,
                    "color": "yellow",
                    "brandName": "PUMA",
                    "addedToCard": false
                }
            ]
        }
    }

    items = () => {
        return this.state.data.map((card, index) => {
          return <Item card={card} key={card.product_id} />;
        });
      };

    render () {
          return <div className="wall">{this.items()}</div>;
    }
    
}

export default Product;