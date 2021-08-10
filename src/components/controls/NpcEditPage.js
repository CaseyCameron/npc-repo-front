import React, { useState } from 'react';
import Loader from '../../common/Loader';
import NpcForm from './NpcForm';
import { useNpcById } from '../../hooks/npcs';
import { updateNpc } from '../../services/npcs-api';
import { useHistory, useParams } from 'react-router-dom';
import './NpcEditPage.css';

const NpcEditPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [add, setAdd] = useState(false);

  const { loading, npc } = useNpcById(id);

  const [updatedNpc, setUpdatedNpc] = useState(null);

  const handleChange = ({ target }) => {
    setUpdatedNpc(prevNpc => ({ ...prevNpc, [target.name]: target.value }));
  };

  const handleUpdate = async ({ name, race, alignment, description, image }, e) => {
    await updateNpc({
      id,
      name,
      race,
      alignment,
      description,
      image,
    });
    history.push(`/npcs/${id}`);
  };

  if (loading && !updatedNpc) return <Loader />;
  return (
    <div className="NpcEditPage">
      <h2>Edit Npc</h2>
      <NpcForm {...updatedNpc} onChange={handleChange} onSubmit={handleUpdate} add={add} />
    </div>
  );
};

export default NpcEditPage;