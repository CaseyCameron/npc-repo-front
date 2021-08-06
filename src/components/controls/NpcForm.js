import { Component } from 'react';
import Button from '../../components/UI/Button';
import './NpcForm.css';

export default class NpcForm extends Component {
  state = {
    name: '',
    race: '',
    alignment: '',
    description: '',
    image: ''
  }

  componentDidMount() {
    const { npc } = this.props;
    if (!npc) { return; }

    this.setState(npc);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeRace = ({ target }) => {
    this.setState({ race: target.value });
  }

  handleChangeAlignment = ({ target }) => {
    this.setState({ alignment: target.value });
  }

  handleChangeDescription = ({ target }) => {
    this.setState({ description: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ image: target.value });
  }

  render() {
    const { name, race, alignment, description, image } = this.state;
    const { npc } = this.props;
    // onChange={((e) => setName(e.target.value))} for inputs

    return (
      <form className="NpcForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Npc Name</span>
            <input name="name" required placeholder="Name of the npc..."
              value={name} onChange={this.handleChangeName}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Npc Race</span>
            <select name="race" required
              value={race} onChange={this.handleChangeRace}
            >
              <option>Aberration</option>
              <option>Beast</option>
              <option>Celestial</option>
              <option>Construct</option>
              <option>Dragon</option>
              <option>Elemental</option>
              <option>Fey</option>
              <option>Fiend</option>
              <option>Giant</option>
              <option>Humanoid</option>
              <option>Monstrosity</option>
              <option>Ooze</option>
              <option>Plant</option>
              <option>Undead</option>
            </select>
          </label>
        </p>

        <p>
          <label>
            <span>Npc Alignment</span>
            <input name="alignment" required placeholder="alignment"
              value={alignment} onChange={this.handleChangeAlignment}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Npc Description</span>
            <input name="description" required placeholder="description"
              value={description} onChange={this.handleChangeDescription}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Npc Image Url</span>
            <input name="image" required placeholder="Url to image of npc"
              value={image} onChange={this.handleChangeUrl}
            />
          </label>
        </p>

        <p>
          <Button>{npc ? 'Update' : 'Add'} Npc</Button>
        </p>

      </form>
    );
  }
}