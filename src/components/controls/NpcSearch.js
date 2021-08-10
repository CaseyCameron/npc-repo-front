import React, { useEffect, useState } from 'react';
import NpcList from '../display/NpcList';
import './NpcSearch.css';

const NpcSearch = ({ npcs }) => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const nameRegex = new RegExp(input.split('').map(i => i.toLowerCase()).join(''), 'i');
    if (!input) setList(npcs);
    if (input) {
      const filteredNpcs = npcs.filter(i => {
        // i.name.toLocaleLowerCase();
        const lowerCasedName = i.name.split('').map(i => i.toLowerCase()).join('');
        // trying to take nameRegex 
        // const lowerCasedRegex = nameRegex.split('').map(i => i.toLowerCase()).join('');
        if (lowerCasedName.match(nameRegex)) return i;
      });
      setList(filteredNpcs);
    } else {
      setList(npcs);
    }
  }, [input]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // .sort((a, b) => {
  //   if (a[sortField] < b[sortField]) return -1;
  //   if (a[sortField] > b[sortField]) return 1;
  //   return 0;
  // });

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