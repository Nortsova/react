import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from 'components';
import { addTodo } from 'actions';


const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addTodo,
}, dispatch);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
