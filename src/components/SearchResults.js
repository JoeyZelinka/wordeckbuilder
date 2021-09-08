import React, { useEffect, useState } from 'react';
import Card from './Card';
import '/Users/joeyz/Desktop/w3B d3V/Dc C0d3/DCProjects/wordeckbuilder/src/styles.css';


const SearchResults = ({
  results,
  addCardToDeck,
  removeCardFromDeck
}) => {
  const [newResults, setNewResults] = useState([])
useEffect ( () => {
  
  const filteredResults = results.filter(result => result.imageUrl)
  setNewResults(filteredResults)
 
  
},[results])
console.log(newResults)
  return (
    <div id="results">
      <h3>Matching Cards ({results.length}):</h3>
      <div className="CardList">
        {
          newResults.map((result) => (
            <Card
              key={result.id}
              addCardToDeck={addCardToDeck}
              removeCardFromDeck={removeCardFromDeck}
              {...result} />
          ))
        }
      </div>
    </div> 
  );
      }


export default SearchResults;