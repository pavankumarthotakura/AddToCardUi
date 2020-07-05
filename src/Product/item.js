import React from 'react';
import './product.css'; 

const Item = props => {
    const { name, price, color, addedToCard } = props.card;
  
    const buy = (card) => {
      console.log(JSON.stringify(card));
      props.addToCardItems({...card, "quantity" : 1});
    };
  
    return (
      <div className="brick">
        <div className="content">
          <div className="color" style={{ color: 'black' }}>
            <div className="palette" style={{ background: color }} />
            <h4>{name}</h4>
          </div>
          <div className="action">
            <h4>{name}</h4>
            
            <span style={{float: 'left'}}>{`price : ${price}`}</span>
            <button disabled={addedToCard} className={ addedToCard ? 'addButton' : 'buyButton'} onClick={() => buy(props.card)}>{addedToCard ? 'Added To Card' : 'Add To Card'}</button>
            
          </div>
        </div>
      </div>
    );
  };

  export default Item;