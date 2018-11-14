import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Heador from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<React.Fragment>
						<Heador />
						<Route path="/login" exact component={Login} />
						<Route path="/" exact component={Home} />
						<Route path="/detail/:id" exact component={Detail} />
					</React.Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
