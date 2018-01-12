import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from 'components';
import actions from 'actions';

const { addTodo } = actions;

const mapDispatchToProps = dispatch => bindActionCreators({
  onSubmit: ({title}) => addTodo(title)
}, dispatch);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
