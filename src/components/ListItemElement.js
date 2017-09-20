import React from 'react';
import PropTypes from 'prop-types';

const ListItemElement = ({ checked, title, handleEdit, handleDelete, handleChecked }) => (
  <li className={checked ? 'done' : ''}>
    <div className="text">{title}</div>
    <div className="btns">
      <button type="button" className="btn" onClick={handleEdit}>Edit</button>
      <button type="button" className="btn" onClick={handleDelete}>Delete</button>
      <button type="button" className="btn" onClick={handleChecked}>{checked ? 'undo' : 'DO THIS'}</button>
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
