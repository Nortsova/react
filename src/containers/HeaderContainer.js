import React from 'react';
import Header from '../components/Header';
import {connect} from 'react-redux';


function mapStateToProps(state) {
	return {
		todos: state
	}
}
const HeaderContainer = connect(mapStateToProps)(Header);


export default HeaderContainer;