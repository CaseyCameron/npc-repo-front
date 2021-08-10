import React, { useState } from 'react';
import { addNpc } from '../../services/npcs-api';
import Loader from '../../common/Loader';
import NpcForm from '../controls/NpcForm';
import { useHistory } from 'react-router-dom';
import './NpcAddPage.css';

const NpcAddPage = () => {
  const history = useHistory();

  const [add, setAdd] = useState(true);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [race, setRace] = useState('');
  const [alignment, setAlignment] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [npc, setNpc] = useState({});



  const handleChange = ({ target }) => {
    setNpc(prevNpc => ({ ...prevNpc, [target.name]: target.value }));
  };

  const handleAdd = async ({ name, race, alignment, description, image }, e) => {
    console.log('you sent');
    setLoading(true);
    const newNpc = await addNpc({
      name,
      race,
      alignment,
      description,
      image,
    });

    setNpc(newNpc);
    history.push(`/npcs/${newNpc.id}`);
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="NpcAddPage">
      <h2>Add a Npc</h2>
      <NpcForm {...npc} onChange={handleChange} onSubmit={handleAdd} add={add} />
    </div>
  );

};
export default NpcAddPage;