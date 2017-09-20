import React from 'react';
import PropTypes from 'prop-types';

const ListItemElement = props => (
  <li className={props.checked ? 'done' : ''}>
    <div className="text">{props.title}</div>
    <div className="btns">
      <button type="button" className="btn" onClick={props.handleEdit}>Edit</button>
      <button type="button" className="btn" onClick={props.handleDelete}>Delete</button>
      <button type="button" className="btn" onClick={props.handleChecked}>{props.checked ? 'undo' : 'DO THIS'}</button>
    </div>
  </li>
);

ListItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleChecked: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListItemElement;
