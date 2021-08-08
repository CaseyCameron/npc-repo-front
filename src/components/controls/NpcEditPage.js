import React from 'react';
import Loading from '../../common/Loader';
import NpcForm from '../controls/NpcForm';
import { useNpcById, useUpdateNpc } from '../../hooks/npcs';
import { useParams } from 'react-router-dom';
import './NpcEditPage.css';

const NpcEditPage = () => {
  let { id } = useParams();
  const npc = useNpcById(id);
  const { handleUpdate, loading } = useUpdateNpc();

  if (loading) return <Loading />;
  return (
    <div className="NpcEditPage">
      <h2>Edit Npc</h2>
      {npc && <NpcForm npc={npc} onSubmit={handleUpdate} />}
    </div>
  );
};

export default NpcEditPage;