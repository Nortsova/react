import React from 'react';


const ListItemForm = (props) => (
	<li>
		<form onSubmit={props.handleSubmit}>
			<input 
				type='text'
				defaultValue={props.title}
				ref='title' />
			<button>Save</button>
		</form>
				
	</li>
);

export default ListItemForm;