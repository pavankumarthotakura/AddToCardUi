import {Catalog_Data} from './action';

let initialState = {
    error: false,
    productdata : [],
    cardsdata: {}
  }

export const catalogReducer = (state = initialState, action) => {

    switch (action.type) {
        case Catalog_Data:
           return { ...state, 
                     productdata : action.payload.productList,
                     cardsdata: action.payload.CardData
                  }
        default:
           return state;
      }
  }