import React from 'react';
import '../Product/product.css'; 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

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

    cartlist() {
        const purchases = this.state.data.cardList.map((item, index) => {
          const { name, price, quantity} = item;
          
          return (
            <li key={index}>
              <span className="cartColor" style={{ backgroundColor: '#ffb3ff' , float: 'left' }}>{name}</span> 
              
              <div style={{ float: 'left', paddingLeft: '50px'}}> 
              <button style={{ float: 'left'}}>➕</button>
              </div>
              <span style={{ float: 'left', paddingLeft: '15px'}}>{quantity}</span> 
              <div style={{ float: 'left', paddingLeft: '15px'}}> 
              <button style={{ float: 'left'}}>➖</button>
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