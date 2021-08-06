import React, { Component } from 'react';
import NpcItem from './NpcItem';
import './NpcList.css';


class NpcList extends Component {

  render() {
    const { npcs } = this.props;

    return (
      <ul className="NpcList">
        {npcs.map(npc => (
          <NpcItem key={npc.id} npc={npc} />
        ))}
      </ul>
    );
  }

}

export default NpcList;