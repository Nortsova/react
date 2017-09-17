import React, {Component} from 'react';

import ListItemForm from './ListItemForm';
import ListItemElement from './ListItemElement';


class ListItem extends Component {
	constructor(props) {
		super(props);


		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChecked = this.handleChecked.bind(this);

		this.state = {
			editing: false
		}
	}
	
	handleDelete() {
		this.props.onDelete(this.props.id);
	}
	handleEdit() {
		this.setState({
			editing: !this.state.editing
		})
	}
	
	handleSubmit(e) {
		e.preventDefault();
		const title = this.refs.title.value;
		this.props.onEdit(this.props.id, title);
		this.setState({
			editing: !this.state.editing
		});
	}
	handleChecked() {
		this.props.onCheck(this.props.id);
	}


	render() {
		return this.state.editing ? 
			<ListItemForm title={this.props.title} handleSubmit={this.handleSubmit}/> 
			: 
			<ListItemElement 
				title={this.props.title} 
				checked={this.props.checked}
				handleEdit={this.handleEdit}
				handleChecked={this.handleChecked}
				handleDelete={this.handleDelete} />;
	}
}

export default ListItem;