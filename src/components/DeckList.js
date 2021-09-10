import React from 'react';
import '../styles.css'
import { Button,  } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { actionIncrement, actionDecrement } from "../redux/actions/Deck"

const DeckList = () => {
  const dispatch = useDispatch()

  let deck = useSelector(state => state.deck)
  // console.log(deck)
  let cardCount = deck.reduce((count, card) => {
    return count + card.count
  }, 0);
  function increment(index) {
    dispatch(actionIncrement(index))


  }
  function decrement(index) {
    dispatch(actionDecrement(index))


  }

  return (
    <div id="deck">
      <h3>Your deck so far ({cardCount} cards):</h3>
      <div className="DeckList">
        
            {deck.map((card, index) => (
              
              <p key={card.id}>
                <span>
                  ({card.count}x) {card.name}
                </span><br />
                <Button variant="primary" onClick={
                  () => increment(index)
                }> + </Button>
                <Button variant="warning" onClick={
                  () => decrement(index)
                }> - </Button>
              </p>
            ))}
          
      </div>
    </div>
  );
}

export default DeckList;