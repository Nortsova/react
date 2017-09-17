
import React from 'react';

import ListItem from './ListItem';

const List = ({data, onEdit, onDelete, onCheck}) => (
	<ul className='task-list'>
		{
			data.map(task => {
				return <ListItem 
					title={task.title} 
					checked={task.checked} 
					onDelete={onDelete}
					onEdit={onEdit}
					onCheck={onCheck}
					key={task.id}
					id={task.id} />
			})
		}
	</ul>
);

export default List;