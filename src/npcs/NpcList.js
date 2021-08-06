import React from 'react';
import NpcItem from './NpcItem';
import './NpcList.css';

const NpcList = ({ npcs }) => {
  const npcElements = npcs.map(npc => (
    <li
      key={npc.id}
      className="NpcItem">
      <NpcItem {...npc} />
    </li>
  ));
  return <ul className="NpcList"> {npcElements}</ul>;
};

export default NpcList;