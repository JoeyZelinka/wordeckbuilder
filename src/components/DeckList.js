import React from 'react';
import '/Users/joeyz/Desktop/w3B d3V/Dc C0d3/DCProjects/wordeckbuilder/src/styles.css' 
import { Button } from 'react-bootstrap'

const DeckList = ({ 
  deck,
  addCardToDeck,
  removeCardFromDeck
 }) => {
  let cardCount = deck.reduce((cardCount, card) => {
    return cardCount + card.count
  }, 0);

  return (
    <div id="deck">
      <h3>Your deck so far ({ cardCount } cards):</h3>
      <div className="DeckList">
      {deck.map(({ id, name, count }) => (
        <p key={ id }>
          <span>
            ({ count }x) { name }
          </span><br /> 
          <Button variant="primary" type="submit" onClick={
            () => addCardToDeck({ id, name })
          }> + </Button>
          <Button variant="warning" onClick={
            () => removeCardFromDeck({ id })
          }> - </Button>
        </p>
      ))}
      </div>
    </div>
  );
}

export default DeckList;