import React from 'react';
import './App.css';
import Product from './Product/product';
import Card from './Card/card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {getCatalogData} from './redux/action';
import { connect } from 'react-redux';

export const url = 'http://localhost:8080/api/v1';

class  App extends React.Component {

  constructor() {
    super();
    this.state = {
      productdata : [],
      cardsdata: {}
    }
  }

  componentDidMount() {
       this.props.getRefreshedData();
  }

  

  render() {
     return (
        <div className="App">
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Bazinga</Typography>
          </Toolbar>
         </AppBar>
         <Card data = {this.props.cardsdata}  getRefreshedData = {this.props.getRefreshedData} />
         <Product data = {this.props.productdata} getRefreshedData = {this.props.getRefreshedData}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({ cardsdata: state.cardsdata, productdata: state.productdata});
const mapDispatchToProps = { getRefreshedData: getCatalogData }

export default connect(mapStateToProps, mapDispatchToProps)(App);
