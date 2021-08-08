import React from 'react';
import Loader from '../../common/Loader';
import NpcSearch from '../controls/NpcSearch';
import { useNpcs } from '../../hooks/npcs';
import './NpcsPage.css';

const NpcsPage = () => {
  const { npcs, loading } = useNpcs();
  if (loading) return <Loader loading={loading} />;

  return (
    <div className="NpcsPage">
      <h2>Npcs List</h2>
      <NpcSearch npcs={npcs} />
      {/* <NpcList npcs={npcs} /> */}
    </div>
  );
};

export default NpcsPage;