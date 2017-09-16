
import List from '../components/List';
import {connect} from 'react-redux';

import {deleteItem,editItem,checkItem} from '../actions';

function mapStateToProps(state) {
	return {
		data: state
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onDelete: (id) => dispatch(deleteItem(id)),
		onEdit: (id, title) => dispatch(editItem(id, title)),
		onCheck: (id) => dispatch(checkItem(id)),
	}
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;