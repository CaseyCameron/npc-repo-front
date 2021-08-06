import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../common/Loader';
import NpcForm from '../common/NpcForm';
import { useAddNpc } from '../hooks/npcs';
import { addNpc } from '../utils/npcs-api';
import './NpcAddPage.css';

const NpcAddPage = () => {
  const { handleAdd, loading } = useAddNpc();

  if (loading) return <Loading />;
  return (
    <div className="NpcAddPage">
      <h2>Add an Npc</h2>
      <NpcForm onSubmit={handleAdd} />
    </div>
  );
};

export default NpcAddPage;