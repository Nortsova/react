import React, {Component} from 'react';


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


	renderItem() {
		return (
			<li className={this.props.checked ? 'done' : ''}>
				<div className='text'>{this.props.title}</div>
				<div className='btns'>
					<span className='btn' onClick={this.handleEdit}>Edit</span>
					<span className='btn' onClick={this.handleDelete}>Delete</span>
					<span className='btn' onClick={this.handleChecked}>{this.props.checked ? 'undo' : 'DO THIS'}</span>
				</div>
			</li>
		);
	}
	renderForm() {
		return (
			<li>
				<form onSubmit={this.handleSubmit}>
					<input 
						type='text'
						defaultValue={this.props.title}
						ref='title' />
					<button>Save</button>
				</form>
				
			</li>
		);
	}
	render() {
		return this.state.editing ? this.renderForm() : this.renderItem();
	}
}

export default ListItem;