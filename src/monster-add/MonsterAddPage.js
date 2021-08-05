import { Component } from 'react';
import MonsterForm from '../common/MonsterForm';
import { addMonster } from '../utils/monsters-api';
import './MonsterAddPage.css';

export default class MonsterAddPage extends Component {
  state = {
    loading: false
  }

  handleAdd = async monsterToAdd => {
    const { history } = this.props;
    console.log(monsterToAdd);
    try {
      this.setState({ loading: true });
      const newMonster = await addMonster(monsterToAdd);
      history.push(`/monsters/${newMonster.id}`);
    }
    catch (err) {
      this.setState({ loading: false });
      console.log(err.message);
    }
  }

  render() {    

    return (
      <div className="MonsterAddPage">
        <h2>Add a Monster</h2>
        <MonsterForm onSubmit={this.handleAdd}/>
      </div>
    );
  }

}