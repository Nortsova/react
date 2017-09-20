import React, { Component } from 'react';
import propTypes from 'prop-types';

import { ListItemForm, ListItemElement } from 'components';

class ListItem extends Component {
  state = {
    editing: false,
  }

 handleEdit = () => {
   this.setState(state => ({ editing: !state.editing }));
 }

 handleSubmit = (e) => {
   e.preventDefault();
   const title = this.inputElement.value; // ?
   this.props.onEdit(title);
   this.setState(state => ({ editing: !state.editing }));
 }

 render = () => {
   const { title, checked, onCheck, onDelete } = this.props;
   return this.state.editing ?
     <ListItemForm
       title={title}
       handleSubmit={this.handleSubmit}
       inputRef={el => this.inputElement = el}
     />
     :
     <ListItemElement
       title={title}
       checked={checked}
       handleEdit={this.handleEdit}
       handleChecked={onCheck}
       handleDelete={onDelete}
     />;
 }
}


ListItem.propTypes = {
  title: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
  onDelete: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
  onCheck: propTypes.func.isRequired,
}

export default ListItem;
