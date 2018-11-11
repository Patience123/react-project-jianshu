import React, { Component } from 'react';
import Heador from './common/header';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Heador></Heador>
			</Provider>
		);
	}
}

export default App;
