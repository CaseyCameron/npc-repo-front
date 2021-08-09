import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import './NpcForm.css';

const NpcForm = ({ npc }) => {
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [npcChange, setNpcChange] = useState([]);

  // useEffect(() => {
  //   if (!npc) return;
  //   setNpc(npc);
  // }, []);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('you hit the form button');
    console.log('this is your npc', npc);
    setNpcChange(npc);
    return npcChange;
  };

  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  const handleChangeRace = ({ target }) => {
    setRace(target.value);
  };

  const handleChangeAlignment = ({ target }) => {
    setAlignment(target.value);
  };

  const handleChangeDescription = ({ target }) => {
    setDescription(target.value);
  };

  const handleImage = ({ target }) => {
    setImage(target.value);
  };

  return (
    <form className="NpcForm" onSubmit={handleSubmit}>
      <p>
        <label>
          <span>Npc Name</span>
          <input name="name" required placeholder="Name of the npc..."
            value={name} onChange={handleChangeName}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Race</span>
          <select name="race" required
            value={race} onChange={handleChangeRace}
          >
            <option>Aberration</option>
            <option>Beast</option>
            <option>Celestial</option>
            <option>Construct</option>
            <option>Dragon</option>
            <option>Elemental</option>
            <option>Fey</option>
            <option>Fiend</option>
            <option>Giant</option>
            <option>Humanoid</option>
            <option>Monstrosity</option>
            <option>Ooze</option>
            <option>Plant</option>
            <option>Undead</option>
          </select>
        </label>
      </p>

      <p>
        <label>
          <span>Npc Alignment</span>
          <input name="alignment" required placeholder="alignment"
            value={alignment} onChange={handleChangeAlignment}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Description</span>
          <input name="description" required placeholder="description"
            value={description} onChange={handleChangeDescription}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Image Url</span>
          <input name="image" required placeholder="Url to image of npc"
            value={image} onChange={handleImage}
          />
        </label>
      </p>

      <p>
        <button>{npc ? 'Update' : 'Add'} Npc</button>
      </p>

    </form>
  );
};

export default NpcForm;