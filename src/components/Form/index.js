import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './style.scss';

class DisconnectedForm extends Component {
  
 render = () => (
   <form className="form" onSubmit={this.props.handleSubmit}>
     <Field name="title" component="input" type="text" />
     <button  type="submit">add task</button>
   </form>
 );
}
const Form = reduxForm({
  form: 'addTask',
})(DisconnectedForm);


Form.propTypes = {
  // onAdd: PropTypes.func.isRequired,
};

export default Form;

