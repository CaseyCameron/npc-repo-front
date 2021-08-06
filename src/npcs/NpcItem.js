import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NpcItem.css';

class NpcItem extends Component {

  render() {
    const npc = this.props.npc;

    return (
      <li className="NpcItem">
        <Link to={`/npcs/${npc.id}`}>
          <h2>{npc.name}</h2>
          <img src={npc.image} alt={npc.name} />
          <p>Race: {npc.race}</p>
          <p>Alignment: {npc.alignment}</p>
          <p>Description: {npc.description}</p>
        </Link>
      </li>
    );
  }

}

export default NpcItem;