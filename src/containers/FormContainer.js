
import Form from '../components/Form';
import {connect} from 'react-redux';

import {addItem} from '../actions';

function mapDispatchToProps(dispatch) {
	return {
		onAdd: (title) => dispatch(addItem(title))
	}
}
const FormContainer = connect(null,mapDispatchToProps)(Form);

export default FormContainer;