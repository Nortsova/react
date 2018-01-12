import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'components';
import actions from 'actions';

const { deleteTodo, editTodo, checkTodo } = actions;

const mapStateToProps = ({ data, ui: { loading } }) => ({ data, loading });

const mapDispatchToProps = dispatch => bindActionCreators({
  onDelete: deleteTodo,
  onEdit: editTodo,
  onCheck: checkTodo,
}, dispatch);


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
