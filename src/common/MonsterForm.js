import { Component } from 'react';
import './MonsterForm.css';

export default class MonsterForm extends Component {
  state = {
    name: '',
    type: '',
    hp: '',
    ac: '',
    cr: '',
    img_url: '',
    // iamge_url: 'https://www.michiganhumane.org/wp-content/uploads/2019/12/Lil-Bub.jpg',
    isLegendary: false
  }

  componentDidMount() {
    const { monster } = this.props;
    if (!monster) { return; }

    this.setState(monster);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleChangeName = ({ target }) => {
    this.setState({ name: target.value });
  }

  handleChangeType = ({ target }) => {
    this.setState({ type: target.value });
  }
  
  handleChangeHp = ({ target }) => {
    this.setState({ hp: target.value });
  }

  handleChangeAc = ({ target }) => {
    this.setState({ ac: target.value });
  }

  handleChangeCr = ({ target }) => {
    this.setState({ cr: target.value });
  }

  handleChangeUrl = ({ target }) => {
    this.setState({ img_url: target.value });
  }

  handleChangeIsLegendary = ({ target }) => {
    this.setState({ isLegendary: target.checked });
  }
  
  render() {
    const { name, type, hp, ac, cr, img_url, isLegendary } = this.state;
    const { monster } = this.props;

    return (
      <form className="MonsterForm" onSubmit={this.handleSubmit}>
        <p>
          <label>
            <span>Monster Name</span>
            <input name="name" required placeholder="Name of the monster..."
              value={name} onChange={this.handleChangeName} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Monster Type</span>
            <select name="type" required
              value={type} onChange={this.handleChangeType}
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
            <span>Monster Hit Points</span>
            <input name="hp" required placeholder="HP"
              value={hp} onChange={this.handleChangeHp}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Monster Armor Class</span>
            <input name="ac" required placeholder="AC"
              value={ac} onChange={this.handleChangeAc}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Monster Challenge Rating</span>
            <input name="cr" required placeholder="CR"
              value={cr} onChange={this.handleChangeCr}
            />
          </label>
        </p>

        <p>
          <label>
            <span>Monster Image Url</span>
            <input name="url" required placeholder="Url to image of monster"
              value={img_url} onChange={this.handleChangeUrl} 
            />
          </label>
        </p>

        <p>
          <label>
            <span>Has Legendary Traits?</span>
            <span className="vertically-centered">
              <input name="isLegendary"
                type="checkbox"
                value={isLegendary} onChange={this.handleChangeIsLegendary} 
              /> Yes
            </span>
          </label>
        </p>

        <p>
          <button>{monster ? 'Update' : 'Add'} Monster</button>
        </p>

      </form>
    );
  }
}