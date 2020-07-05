import React from 'react';
import './product.css'; 
import Item from './item';

class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            data:  []
        }
    }

    componentDidUpdate(){
        if(this.state.data !== this.props.data) {
          this.setState({data : this.props.data});
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