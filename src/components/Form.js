import React, { Component } from 'react';

class Form extends Component {

	constructor(props) {
		super(props);

		this.state = {
			title: ''
		}


		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleSubmit(e) {
		e.preventDefault();

		const title = this.state.title;

		if(title) {
			this.props.onAdd(title);
			this.setState({ title: '' });
		}
	}
	handleChange(event) {
		const title = event.target.value;

		this.setState({ title });
	}


	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<input 
					type='text' 
					value={this.state.title}
					onChange={this.handleChange}
					placeholder='What you should to do?' />
				<button >add task</button>
			</form>
		);
	}
}

export default Form;