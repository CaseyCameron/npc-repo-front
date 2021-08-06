import { Component } from 'react';
import { getAllNpcs } from '../utils/npcs-api';
import Loader from '../common/Loader';
import NpcList from './NpcList';
import './NpcsPage.css';

export default class NpcsPage extends Component {
  state = {
    npcs: [],
    loading: true
  }

  async componentDidMount() {
    try {
      const npcs = await getAllNpcs();
      if (npcs) {
        this.setState({ npcs: npcs });
      }
      else {
        console.log('No npcs received. Check network tab.');
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
    const { npcs, loading } = this.state;

    return (
      <div className="NpcsPage">
        <Loader loading={loading} />

        <h2>Npcs List</h2>

        <NpcList npcs={npcs} />

      </div>
    );
  }

}
