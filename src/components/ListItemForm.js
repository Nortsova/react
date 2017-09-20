import React from 'react';
import PropTypes from 'prop-types';

const ListItemForm = props => (
  <li>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="title"
        onChange={props.handleChange}
        defaultValue={props.title}

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
