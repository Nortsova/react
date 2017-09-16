
import React from 'react';
import Form from '../components/Form';
import { addTodo } from '../actions';
import {connect} from 'react-redux'; 


function mapDispatcherProps(dispatch) {
	return {
		onAdd: (title) => dispatch(addTodo(title))
	}
}

const FormContainer = connect(null,mapDispatcherProps)(Form);



export default FormContainer;