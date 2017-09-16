import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import './styles/styles.css'

import storeData from './store';


render(
	<Provider store={storeData}>
		<App />
	</Provider>,
	document.getElementById('root')
)