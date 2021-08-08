import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import NpcList from '../display/NpcList';
import './NpcSearch.css';

const NpcSearch = ({ npcs }) => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    // };

    // if (input.length > 0) {
    //   console.log(npcs);
    //   let searchResults = npcs.filter(i => {
    //     return i.name.match(input);
    //   });

    const nameRegex = new RegExp(input, 'i');

    const searchedData = npcs
      .filter(thing => {
        return !input || thing.name.match(nameRegex);
      });
    // .sort((a, b) => {
    //   if (a[sortField] < b[sortField]) return -1;
    //   if (a[sortField] > b[sortField]) return 1;
    //   return 0;
    // });

    setList(searchedData);
    console.log('searched data', searchedData);
    console.log('npcs', npcs);
  };

  return (
    <>
      <form className="NpcSearch">
        <input
          name='input'
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
      <NpcList npcs={list} />
    </>
  );
};

export default NpcSearch;