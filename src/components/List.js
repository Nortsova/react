
import React from 'react';

import ListItem from './ListItem';

const List = ({ data, onEdit, onDelete, onCheck }) => (
  <ul className="task-list">
    {
      data.map((task) => {
        const { id, title, checked } = task;
        return (
          <ListItem
            title={title}
            checked={checked}
            onDelete={() => onDelete(id)}
            onEdit={title => onEdit(id, title)}
            onCheck={() => onCheck(id)}
            key={id}
          />
        );
      },
      )
    }
  </ul>
);

export default List;
