import React from 'react';
import Button from '../UI/Button';
import './NpcForm.css';

const NpcForm = ({ name, race, alignment, description, image, onChange, onSubmit, add }) => {

  return (
    <form className="NpcForm" onSubmit={onSubmit}>
      <p>
        <label>
          <span>Npc Name</span>
          <input name="name" required placeholder="Name of the npc..."
            value={name} onChange={onChange}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Race</span>
          <select name="race" required
            value={race} onChange={onChange}
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
            value={alignment} onChange={onChange}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Description</span>
          <input name="description" required placeholder="description"
            value={description} onChange={onChange}
          />
        </label>
      </p>

      <p>
        <label>
          <span>Npc Image Url</span>
          <input name="image" required placeholder="Url to image of npc"
            value={image} onChange={onChange}
          />
        </label>
      </p>

      <p>
        <Button onClick={onSubmit}>{add ? 'Add' : 'Update'} Npc</Button>
      </p>

    </form>
  );
};

export default NpcForm;
