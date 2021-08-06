import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <header>
        <h2>Welcome to DnD Npcs</h2>
      </header>
      <p>
        <Link to='/npcs'>See the List</Link>
      </p>
    </div>
  );
};

export default Home;