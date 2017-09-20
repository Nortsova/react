import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { List } from 'components';
import { deleteItem, editItem, checkItem } from 'actions';


const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = dispatch => bindActionCreators({
  onDelete: deleteItem,
  onEdit: editItem,
  onCheck: checkItem,
}, dispatch);


const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
