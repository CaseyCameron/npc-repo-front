import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Loading from '../../common/Loader';
import { useDeleteNpcById } from '../../hooks/npcs';
import './NpcDetailPage.css';
import { useNpcById } from '../../hooks/npcs';

const NpcDetailPage = () => {
  let { id } = useParams();
  const npc = useNpcById(id);
  const { handleDelete, loading } = useDeleteNpcById();

  if (loading) return <Loading />;
  return (
    <div className="NpcDetailPage">

      <h2>Npc Detail Page</h2>
      <img src={npc.image} alt={npc.name} />

      <p>Npc name: {npc.name}</p>
      <p>Npc race: {npc.race}</p>
      <p>Alignment: {npc.alignment}</p>
      <p>Npc Description: {npc.description}</p>

      <Link to={`/npcs/${npc.id}/edit`}>
        <Button>Edit Npc</Button>
      </Link>

      <Button className="delete" onClick={handleDelete}>
        Delete Npc
      </Button>
    </div>
  );
};

export default NpcDetailPage;