import { Component } from 'react';
import Loader from '../common/Loader';
import MonsterList from './MonsterList';
import { getAllMonsters } from '../utils/monsters-api';
import './MonstersPage.css';

export default class MonstersPage extends Component {
  state = {
    monsters: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const monsters = await getAllMonsters();
      if (monsters) {
        this.setState({ monsters: monsters });
      }
      else {
        console.log('No monsters received. Check network tab.');
      }
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { monsters, loading } = this.state;

    return (
      <div className="MonstersPage">
        <Loader loading={loading}/>
        
        <h2>Monsters List</h2>

        <MonsterList monsters={monsters}/>
        
      </div>
    );
  }

}
