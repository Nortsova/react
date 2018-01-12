import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ListItemForm = ({ handleSubmit, handleChange, title }) => (
  <li>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        defaultValue={title}

      />
      <button>Save</button>
    </form>
  </li>
);

ListItemForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ListItemForm;
