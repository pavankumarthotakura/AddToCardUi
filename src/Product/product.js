import React from 'react';
import './product.css'; 
import Item from './item';
import axios from 'axios';
import {url} from '../App';

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

    addToCardItems = (requestBody) => {
        axios.post(`${url}/addtocard`, {...requestBody}).then(response => {
            console.log(response.status)
            if(response.status === 200) {
              this.props.getRefreshedData();
            }
        });
      }

    items = () => {
        return this.state.data.map((card, index) => {
          return <Item card={card} key={card.product_id} addToCardItems = {this.addToCardItems}/>;
        });
      };

    render () {
          return <div className="wall">{this.items()}</div>;
    }
    
}

export default Product;