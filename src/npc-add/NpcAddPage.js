import { Component } from 'react';
import NpcForm from '../common/NpcForm';
import { addNpc } from '../utils/npcs-api';
import './NpcAddPage.css';

export default class NpcAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async npcToAdd => {
    const { history } = this.props;
    try {
      this.setState({ loading: true });
      const newNpc = await addNpc(npcToAdd);
      history.push(`/npcs/${newNpc.id}`);
      console.log('adding');
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {

    return (
      <div className="NpcAddPage">
        <h2>Add an Npc</h2>
        <NpcForm onSubmit={this.handleAdd} />
      </div>
    );
  }

}