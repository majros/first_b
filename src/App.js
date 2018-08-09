import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import PersistentDrawer from './components/layout/layout';

class App extends Component {
	render() {
		return (
			<Provider store={store.store}>
				<Router >
					<PersistentDrawer/>
				</Router>
			</Provider>
		);
	}
}

export default App;
