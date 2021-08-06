import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>NPC Repository</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/npcs">Npcs</NavLink>
          <NavLink to="/npcs/add">Add Npc</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;