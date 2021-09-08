import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; 
import './wordeckbuilder/src/styles.css';

const SearchBar = ({ setResults }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [colors, setColors]= useState('');
  const [cmc, setCmc]= useState('');
  const [types, setTypes]= useState('');
  const [subtypes, setSubTypes]= useState('');
  const [power, setPower]= useState('');
  const [toughness, setToughness] = useState('');
  const [rarity, setRarity]= useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  }
  const handleTextChange = event => {
    setText(event.target.value);
  }
  const handleColorChange = event => {
    setColors(event.target.value);
  }
  const handleCmcChange = event => {
    setCmc(event.target.value);
  }
  const handleTypesChange = event => {
    setTypes(event.target.value);
  }
  const handleSubTypesChange = event => {
    setSubTypes(event.target.value);
  }
  const handlePowerChange = event => {
    setPower(event.target.value);
  }
  const handleToughnessChange = event => {
    setToughness(event.target.value);
  }
  const handleRarityChange = event => {
    setRarity(event.target.value);
  }



  

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.magicthegathering.io/v1/cards?name=${ name }&text=${ text }&colors=${ colors }&cmc=${ cmc }&types=${ types }&subtypes=${ subtypes }&power=${ power }&rarity=${ rarity }&toughness=${ toughness }`)

      .then((res) => res.json())
      .then((data) => {
        setResults(data.cards);
      });
  } 

  return (
    <div id="search">
      <h3>Card Search</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by Card Name"
          value={name}
          onChange={handleNameChange} />
          <input
           type="text"
           placeholder="Search by Color"
           value={colors}
           onChange={handleColorChange} />
          <input
          type="text"
          placeholder="Search by Types"
          value={types}
          onChange={handleTypesChange} />
           <input
          type="text"
          placeholder="Search by Subtypes"
          value={subtypes}
          onChange={handleSubTypesChange} />
        <input
          type="text"
          placeholder="Search Card Text"
          value={text}
          onChange={handleTextChange} />
          <input
          type="text"
          placeholder="Search by Power"
          value={power}
          onChange={handlePowerChange} />
          <input
          type="text"
          placeholder="Search by Toughness"
          value={toughness}
          onChange={handleToughnessChange} />
          <input
          type="text"
          placeholder="Search by CMC"
          value={cmc}
          onChange={handleCmcChange} />
          <input
          type="text"
          placeholder="Search by Rarity"
          value={rarity}
          onChange={handleRarityChange} />
        <Button variant="info" type="submit">Search</Button>
      </form>
    </div>
  );
}

export default SearchBar;
