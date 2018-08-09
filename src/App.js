import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import LocaleLayout from './components/layout/layoutIntl';

class App extends Component {
	render() {
		return (
			<Provider store={store.store}>
				<Router >
					<LocaleLayout/>
				</Router>
			</Provider>
		);
	}
}

export default App;
