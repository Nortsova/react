
import { connect } from 'react-redux';
import Form from '../components/Form';

import { addItem } from '../actions';


const mapDispatchToProps = dispatch => (
  {
    onAdd: title => dispatch(addItem(title)),
  }
);
const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
