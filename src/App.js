import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Heador from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<React.Fragment>
						<Heador />
						<Route path="/" exact component={Home} />
						<Route path="/detail" exact component={Detail} />
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
