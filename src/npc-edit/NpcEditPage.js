import { Component } from 'react';
import NpcForm from '../common/NpcForm';
import { getNpc, updateNpc } from '../utils/npcs-api';
import './NpcEditPage.css';

export default class NpcEditPage extends Component {
  state = {
    npc: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const npc = await getNpc(match.params.id);
      this.setState({ npc: npc });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async npc => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedNpc = await updateNpc(npc);
      history.push(`/npcs/${updatedNpc.id}`);
    }

    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }

  render() {
    const { npc } = this.state;
    return (
      <div className="NpcEditPage">
        <h2>Edit Npc</h2>
        {npc && <NpcForm npc={npc} onSubmit={this.handleUpdate} />}
      </div>
    );
  }
}