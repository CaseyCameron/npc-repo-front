import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
  
  render() {
    return (
      <div className="Home">
        <header>
          <h2>Welcome to DnD Monsters</h2>
        </header>

        <p>
          <Link to='/monsters'>See the List</Link>
        </p>
      </div>
    );
  }

}