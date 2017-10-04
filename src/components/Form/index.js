import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './style.scss';

class DisconnectedForm extends Component {
 state = {
   title: '',
 }
 handleChange = ({ target }) => this.setState({ title: target.value });

 handleSubmit = (e) => {
   e.preventDefault();

   const { title } = this.state;

   if (title) {
     this.props.onAdd(title);
     this.setState({ title: '' });
   }
 }


 render = () => (
   <form className="form" onSubmit={this.handleSubmit}>
     <input
       type="text"
       value={this.state.title}
       onChange={this.handleChange}
       placeholder="What you should to do?"
     />
     <button >add task</button>
   </form>
 );
}


DisconnectedForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

// const Form = reduxForm({
//   form: 'contact',
// })(DisconnectedForm);

export default DisconnectedForm;

