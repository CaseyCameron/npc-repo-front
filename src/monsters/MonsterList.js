import React, { Component } from 'react';
import MonsterItem from './MonsterItem';
import './MonsterList.css';


class MonsterList extends Component {
  
  render() { 
    const { monsters } = this.props;

    return (
      <ul className="MonsterList">
        {monsters.map(monster => (
          <MonsterItem key={monster.id} monster={monster}/>
        ))}
      </ul>
    );
  }

}
 
export default MonsterList;