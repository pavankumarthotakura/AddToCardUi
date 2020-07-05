import React from 'react';
import './App.css';
import axios from 'axios';
import Product from './Product/product';
import Card from './Card/card';
export const url = 'http://localhost:8080';
class  App extends React.Component {

  constructor() {
    super();
    this.state = {
      productdata : [],
      cardsdata: {}
    }
  }

  componentDidMount() {
       this.getRefreshedData();
  }

  getRefreshedData = () => {
    axios.get(`${url}/data`).then(response => {
      console.log(response.data);
      this.setState({
        productdata : response.data.productList,
        cardsdata: response.data.CardData
      });
    });
  }

  render() {
     return (
        <div className="App">
      
         <Card data = {this.state.cardsdata}  getRefreshedData = {this.getRefreshedData} />
         <Product data = {this.state.productdata} getRefreshedData = {this.getRefreshedData}/>
        </div>
    );
  }
}

export default App;
