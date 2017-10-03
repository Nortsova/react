import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'components';
import { deleteTodo, editTodo, checkTodo } from 'actions';


const mapStateToProps = ({ data, loading }) => ({ data, loading });

const mapDispatchToProps = dispatch => bindActionCreators({
  onDelete: deleteTodo,
  onEdit: editTodo,
  onCheck: checkTodo,
}, dispatch);


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
