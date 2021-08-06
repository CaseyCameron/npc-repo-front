import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
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

