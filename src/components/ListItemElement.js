import React from 'react';

const ListItemElement = (props) => (
	<li className={props.checked ? 'done' : ''}>
		<div className='text'>{props.title}</div>
		<div className='btns'>
			<span className='btn' onClick={props.handleEdit}>Edit</span>
			<span className='btn' onClick={props.handleDelete}>Delete</span>
			<span className='btn' onClick={props.handleChecked}>{props.checked ? 'undo' : 'DO THIS'}</span>
		</div>
	</li>
);

export default ListItemElement;