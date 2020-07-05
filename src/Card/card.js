import React from 'react';
import '../Product/product.css'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import {url} from '../App';

class Cards extends React.Component {
    
    constructor() {
        super();
        this.state = { 'data' : { 'cardList': [], 'total': 0} };
    }

    componentDidUpdate(){
        if(this.state.data !== this.props.data) {
          this.setState({data : this.props.data});
        }
    }

    updateQuantity = (item) => {
        axios.put(`${url}/addtocard`, {...item}).then(response => {
            if(response.status === 200) {
                this.props.getRefreshedData();
            }
        });
    }

    deleteProductFromCard = (item) => {
        axios.delete(`${url}/addtocard`, {data : {...item} } ).then(response => {
            if(response.status === 200) {
                this.props.getRefreshedData();
            }
        });
    }

    decreaseCount = (item) => {
        item.quantity = item.quantity - 1;
        if(item.quantity) {
            this.updateQuantity(item);
        } else {
            this.deleteProductFromCard(item);
        }
    }


    cartlist() {
        const purchases = this.state.data.cardList.map((item, index) => {
          const { name, price, quantity} = item;
          
          return (
            <li key={item.product_id}>
              <span className="cartColor" style={{ backgroundColor: '#ffb3ff' , float: 'left' }}>{name}</span> 
              
              <div style={{ float: 'left', paddingLeft: '50px'}}> 
              <button style={{ float: 'left'}} onClick = {() => {item.quantity = item.quantity + 1; this.updateQuantity(item)}}>➕</button>
              </div>
              <span style={{ float: 'left', paddingLeft: '15px'}}>{quantity}</span> 
              <div style={{ float: 'left', paddingLeft: '15px'}}> 
              <button style={{ float: 'left'}} onClick = {() =>  this.decreaseCount(item)}>➖</button>
              </div>

              <span  style={{float:'right'}}> {`$ ${price}`}</span>
              
            </li>
          );
        });
        return purchases;
     }

    render() {
        return (
            <div className="wall">
            <Card>
                <CardHeader title="Added Items"/>
                <CardContent>
                <div className="Cart">
                       <ul>{this.cartlist().length === 0 ? "No Items Found" : this.cartlist()}</ul>
                       {this.cartlist().length !== 0 ? <hr/> : null}
                       {this.cartlist().length !== 0 ? <div style={{float:'right', paddingRight:'260px'}}> {`Total : ${this.state.data.total}`}</div> : null}
                </div>
                </CardContent>
            </Card>
            </div>
        );
    }
}
export default Cards;