import React, {Component} from 'react';

import ListItemForm from './ListItemForm';
import ListItemElement from './ListItemElement';

// ?
class ListItem extends Component {
	state = {
		editing: false
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.inputElement.value; // ?
		this.props.onEdit(title);
		this.setState((state) => ({editing: !state.editing}));
	}
	
	render = () => {
		const {title, checked, onCheck,onDelete } = this.props;
		return this.state.editing ? 
			<ListItemForm 
				title={title} 
				handleSubmit={this.handleSubmit}
				inputRef={el => this.inputElement = el}/> 
			: 
			<ListItemElement 
				title={title} 
				checked={checked}
				handleEdit={() => this.setState((state) => ({editing: !state.editing}))}
				handleChecked={onCheck}
				handleDelete={onDelete} />;
	}
}

export default ListItem;