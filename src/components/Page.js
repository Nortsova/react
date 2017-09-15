import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Page extends Component {
	onYearBtnClick(e) {
		e.preventDefault;
		this.props.getPhotos(+e.target.textContent)
	}
	render() {
		const { year, photos,fetching } = this.props
		return (
			<div>
				<a href='#' className='btn' onClick={::this.onYearBtnClick}>2015</a>
				<a href='#' className='btn' onClick={::this.onYearBtnClick}>2016</a>
				<a href='#' className='btn' onClick={::this.onYearBtnClick}>2017</a>
				<h1>Data from {year} year</h1>
				{ 
					fetching ? 
						<p>loading</p>
						:
						<p>You have {photos.length} photos from {year} year</p>
				}
			</div>
		);
	}
}

Page.PropTypes = {
	year: PropTypes.number.isRequired,
	photos: PropTypes.array.isRequired,
	getPhotos: PropTypes.func.isRequired
}