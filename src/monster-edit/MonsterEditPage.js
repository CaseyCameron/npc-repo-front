import { Component } from 'react';
import MonsterForm from '../common/MonsterForm';
import { getMonster, updateMonster } from '../utils/monsters-api';
import './MonsterEditPage.css';

export default class MonsterEditPage extends Component {
  state = {
    monster: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const monster = await getMonster(match.params.id);
      this.setState({ monster: monster });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleUpdate = async monster => {
    const { history } = this.props;

    try {
      this.setState({ loading: true });
      const updatedMonster = await updateMonster(monster);
      history.push(`/monsters/${updatedMonster.id}`);
    }

    catch (err) {
      console.log(err.message);
      this.setState({ loading: false });
    }
  }


  render() {
    const { monster } = this.state;
    return (
      <div className="MonsterEditPage">
        <h2>Edit Monster</h2>
        {monster && <MonsterForm monster={monster} onSubmit={this.handleUpdate}/>}
      </div>
    );
  }
}