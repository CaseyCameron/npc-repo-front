import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MonsterItem.css';

class MonsterItem extends Component {
  
  render() { 
    const monster = this.props.monster;

    return (
      <li className="MonsterItem">
        <Link to={`/monsters/${monster.id}`}>
          <h2>{monster.name}</h2>
          <img src={monster.img_url} alt={monster.name}/>
          <p>Type: {monster.type}</p>
          <p>Hitpoints: {monster.hp}</p>
          <p>Armor Class: {monster.ac}</p>
          <p>Challenge Rating: {monster.cr}</p>
          <p>Legendary Status: {monster.is_legendary}</p>
        </Link>
      </li>
    );
  }

}
 
export default MonsterItem;