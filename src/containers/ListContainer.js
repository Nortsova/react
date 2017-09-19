import { connect } from 'react-redux';

import { List } from 'components';

import { deleteItem, editItem, checkItem } from '../actions';

const mapStateToProps = state => ({ data: state });

const mapDispatchToProps = dispatch => (
  {
    onDelete: id => dispatch(deleteItem(id)),
    onEdit: (id, title) => dispatch(editItem(id, title)),
    onCheck: id => dispatch(checkItem(id)),
  }
);

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
