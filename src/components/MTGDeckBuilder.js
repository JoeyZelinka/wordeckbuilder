import React, { useState } from 'react';
import {
  DeckList,
  SearchBar,
  SearchResults
} from '.';
import { Container, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { actionAddToDeck, actionRemoveToDeck } from '../redux/actions/Deck'




const MTGDeckBuilder = () => {
  const dispatch = useDispatch()
  const [results, setResults] = useState([]);
  const [deck] = useState([]);



  const AddCardToDeck = ({ id, name }) => {
    const nextDeck = [...deck];
    const index = nextDeck.findIndex(card => card.id === id);

    if (index > -1) {
      nextDeck[index].count += 1;
    } else {
      nextDeck.push({
        id,
        name,
        count: 1
      });
    }
    console.log(nextDeck)
    dispatch(actionAddToDeck(nextDeck))

    // setDeck(nextDeck);




  }

  const removeCardFromDeck = ({ id }) => {
    console.log(id)
    const nextDeck = [...deck];
    const index = nextDeck.findIndex(card => card.id === id);

    if (index !== -1) {
      nextDeck.splice(index, 1);
      
    } 
    // if (index === -1) {
    //   nextDeck.splice(index, 1);
    // } else {
    //   nextDeck[index].count -= 1;
    // }
dispatch(actionRemoveToDeck(nextDeck))
    // setDeck(nextDeck);

  }

  return (


    <div>
      
      <SearchBar setResults={setResults} />
      <Container fluid>
        <Row>
          <Col>
            <SearchResults
              results={results}
              addCardToDeck={AddCardToDeck}
              removeCardFromDeck={removeCardFromDeck}
            />
          </Col>
          <Col>
            <DeckList
            addCardToDeck={AddCardToDeck}
            removeCardFromDeck={removeCardFromDeck}
             />
          </Col>
        </Row>

      </Container >
    </div>

  );
}



export default MTGDeckBuilder;


