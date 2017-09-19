import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components';

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
            onEdit={name => onEdit(id, name)}
            onCheck={() => onCheck(id)}
            key={id}
          />
        );
      },
      )
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default List;
