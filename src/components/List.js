import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components';


const List = ({ data, loading, onEdit, onDelete, onCheck }) => (
  <ul className="task-list">
    {!loading && Object.values(data).length ?
      Object.values(data).map(({ id, title, checked }) => (
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
      :
      <p>loading</p>
    }
  </ul>
);

List.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    checked: PropTypes.bool,
  }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default List;
