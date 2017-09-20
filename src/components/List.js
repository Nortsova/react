import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components';

const List = ({ data, onEdit, onDelete, onCheck }) => (
  <ul className="task-list">
    {
      data.map(({ id, title, checked }) => (
        <ListItem
          title={title}
          checked={checked}
          onDelete={() => onDelete(id)}
          onEdit={name => onEdit(id, name)}
          onCheck={() => onCheck(id)}
          key={id}
        />
      ),
      )
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    checked: PropTypes.bool,
  }),
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default List;
