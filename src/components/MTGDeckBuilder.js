import React, { useState } from 'react';
import {
  DeckList,
  SearchBar,
  SearchResults
} from '.';
import { Container, Col, Row } from 'react-bootstrap';




const MTGDeckBuilder = () => {
  const [results, setResults] = useState([]);
  const [deck, setDeck] = useState([]);



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

    setDeck(nextDeck);




  }

  const removeCardFromDeck = ({ id }) => {
    const nextDeck = [...deck];
    const index = nextDeck.findIndex(card => card.id === id);

    if (index === -1) {
      nextDeck.splice(index, 1);
    } else {
      nextDeck[index].count -= 1;
    }

    setDeck(nextDeck);

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
            <DeckList deck={deck}
              addCardToDeck={AddCardToDeck}
              removeCardFromDeck={removeCardFromDeck} />
          </Col>
        </Row>

      </Container >
    </div>

  );
}



export default MTGDeckBuilder;
