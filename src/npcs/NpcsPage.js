import React from 'react';
import Loader from '../common/Loader';
import NpcList from './NpcList';
import { useNpcs } from '../hooks/npcs';
import './NpcsPage.css';

const NpcsPage = () => {
  const { npcs, loading } = useNpcs();
  if (loading) return <Loader loading={loading} />;

  return (
    <div className="NpcsPage">
      <h2>Npcs List</h2>
      <NpcList npcs={npcs} />
    </div>
  );
};

export default NpcsPage;