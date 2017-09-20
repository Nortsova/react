import React from 'react';
import PropTypes from 'prop-types';

const ListItemForm = props => (
  <li>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        defaultValue={props.title}
        ref={props.inputRef}
      />
      <button>Save</button>
    </form>

  </li>
);

ListItemForm.propTypes = {
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired
}

export default ListItemForm;
