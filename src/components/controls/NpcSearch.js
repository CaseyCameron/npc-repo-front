import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import './NpcSearch.css';

const NpcSearch = ({ npcs }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    console.log(npcs);
    let searchResults = npcs.filter(i => {
      return i.name.match(input);
    });
  };

  return (
    <>
      <form className="NpcSearch">
        <input
          type='text'
          placeholder='search'
          value={input}
          onChange={handleChange}
        />

        {/* <select name="sortField" value={sortField} onChange={handleSearchChange}>
          <option value="">all</option>
          <option value="title">by name</option>
          <option value="affiliation">by affiliation</option>
        </select> */}
      </form>
    </>
  );
};

export default NpcSearch;