import { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../common/Loader';

import { getMonster, deleteMonster } from '../utils/monsters-api';
import './MonsterDetailPage.css';

export default class MonsterDetailPage extends Component {
  state = {
    monster: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const monster = await getMonster(match.params.id);
      if (monster) {
        this.setState({ monster: monster });
      } else {
        console.log('No monster received. Check id and network tab.');
      }
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleDelete = async () => {
    const { monster } = this.state;
    const { history } = this.props;

    const confirmation = `Sure you want to delete ${monster.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading : true });
      await deleteMonster(monster.id);
      history.push('/monsters');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading : false });
    }
  }

  render() {
    const { monster, loading } = this.state;

    if (!monster) return null;

    return (
      <div className="MonsterDetailPage">
        <Loader loading={loading}/>

        <h2>Monster Detail Page</h2>
        <img src={monster.img_url} alt={monster.name}/>
        
        <p>Monster name: {monster.name}</p>
        <p>Monster type: {monster.type}</p>
        <p>Monster Hit Points: {monster.hp}</p>
        <p>Monster AC: {monster.ac}</p>
        <p>Monster Challenge Rating: {monster.cr}</p>
        <p>Monster Legendary Status: {monster.is_legendary}</p>
        <p>Owner: {monster.userName}</p>

        <Link to={`/monsters/${monster.id}/edit`}>
          Edit Monster
        </Link>

        <button className="delete" onClick={this.handleDelete}>
          Delete Monster
        </button>
      </div>
    );
  }

}