import React from 'react';
import '../styles.css'; 
import { Button } from 'react-bootstrap';


const Card = ({
    id,
    name,
    imageUrl,
    addCardToDeck,
    removeCardFromDeck
  }) => {
    
    return (
      <div className="Card">
        <img className="preview" src={ imageUrl } alt="" />
        <div className="actions">
          <Button variant="danger"
            onClick={() => {
              addCardToDeck({
                id,
                name
              })
            }}>
              (+) Add to Deck
            </Button>
          <Button variant="info"
            onClick={() => {
              removeCardFromDeck({
                id
              })
            }}>
              (-) Remove from Deck
            </Button>
        </div>
      </div>
    );
  }

export default Card;