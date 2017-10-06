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
const NewForm = reduxForm({
  form: 'addTask',
})(DisconnectedForm);



class Form extends React.Component {
  submit = (values) => {
    const {title} = values;
    this.props.onAdd(title);
  }
  render() {
    return (
      <NewForm onSubmit={this.submit} />
    )
  }
}


Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Form;

