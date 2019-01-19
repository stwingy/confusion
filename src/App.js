import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux';
import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'


const store = createStore(reducers,applyMiddleware(thunk,logger))
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div>
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
