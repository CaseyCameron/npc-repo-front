import { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import Loader from '../../common/Loader';
import { getNpc, deleteNpc } from '../../services/npcs-api';
import './NpcDetailPage.css';

export default class NpcDetailPage extends Component {
  state = {
    npc: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const npc = await getNpc(match.params.id);
      if (npc) {
        this.setState({ npc: npc });
      } else {
        console.log('No npc received. Check id and network tab.');
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
    const { npc } = this.state;
    const { history } = this.props;

    const confirmation = `Sure you want to delete ${npc.name}?`;

    if (!window.confirm(confirmation)) { return; }

    try {
      this.setState({ loading: true });
      await deleteNpc(npc.id);
      history.push('/npcs');
    }
    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { npc, loading } = this.state;

    if (!npc) return null;

    return (
      <div className="NpcDetailPage">
        <Loader loading={loading} />

        <h2>Npc Detail Page</h2>
        <img src={npc.image} alt={npc.name} />

        <p>Npc name: {npc.name}</p>
        <p>Npc race: {npc.race}</p>
        <p>Alignment: {npc.alignment}</p>
        <p>Npc Description: {npc.description}</p>

        <Link to={`/npcs/${npc.id}/edit`}>
          <Button>Edit Npc</Button>
        </Link>

        <Button className="delete" onClick={this.handleDelete}>
          Delete Npc
        </Button>
      </div>
    );
  }

}