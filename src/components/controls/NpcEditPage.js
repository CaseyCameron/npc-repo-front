import React, { useState } from 'react';
import Button from '../UI/Button';
import Loading from '../../common/Loader';
import { useNpcById } from '../../hooks/npcs';
import { updateNpc } from '../../services/npcs-api';
import { useHistory, useParams } from 'react-router-dom';
import './NpcEditPage.css';

const NpcEditPage = () => {
  let { id } = useParams();
  const npc = useNpcById(id);

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const [npcChange, setNpcChange] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('npc from db by id', npc);
    //You have state with the updated info
    //You need to put it into an npc object
    //Then PUT request
    npc.name = name;
    npc.race = race;
    npc.alignment = alignment;
    npc.description = description;
    npc.image = image;

    setNpcChange(npc);
    console.log('npcChange', npcChange);
    const test = await updateNpc(npc)
      .then(res => history.push(`/npcs/${res.id}`))
      .then(() => setLoading(false));
    console.log('test', test);
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

  if (loading) return <Loading />;
  return (
    <div className="NpcEditPage">
      <h2>Edit Npc</h2>
      {/* {npc && <NpcForm npc={npc} onSubmit={handleUpdate} />} */}
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
          <Button onClick={handleSubmit}>Update Npc</Button>
        </p>

      </form>
    </div>
  );
};

export default NpcEditPage;