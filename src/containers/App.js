import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'


class App extends Component {
	render() {
		const { getPhotos } = this.props.pageActions
		const { user, page } = this.props
		return <div className='row'>
			<User name={user.name}></User>
			<Page year={page.year} photos={page.photos}  getPhotos={getPhotos} fetching={page.fetching}></Page>
		</div>
	}
}

function mapStateToProps (state) {
	return {
		user: state.user, 
		page: state.page
	}
}
function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)