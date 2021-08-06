import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from '../common/Loader';
import NpcForm from '../common/NpcForm';
import { addNpc } from '../utils/npcs-api';
import './NpcAddPage.css';

const NpcAddPage = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleAdd = async (npcToAdd) => {
    try {
      setLoading(true);
      const newNpc = await addNpc(npcToAdd);
      history.push(`/npcs/${newNpc.id}`);
      console.log('adding');
    }
    catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  };

  if (loading) return <Loading />;
  return (
    <div className="NpcAddPage">
      <h2>Add an Npc</h2>
      <NpcForm onSubmit={handleAdd} />
    </div>
  );
};

export default NpcAddPage;