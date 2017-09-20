import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form } from 'components';
import { addItem } from 'actions';


const mapDispatchToProps = dispatch => bindActionCreators({
  onAdd: addItem,
}, dispatch);

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
