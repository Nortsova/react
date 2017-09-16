
import React from 'react';

import ListItem from './ListItem';

function List(props) {
	return (

		<ul className='task-list'>
			{
				props.data.map(task => {
					return <ListItem 
						title={task.title} 
						checked={task.checked} 
						onDelete={props.onDelete}
						onEdit={props.onEdit}
						onCheck={props.onCheck}
						key={task.id}
						id={task.id} />
				})
			}
		</ul>);
}

export default List;