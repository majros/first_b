import React, { Component } from 'react';
import Header from './components/Header';
import NavTab from './components/NavTab';

class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<NavTab/>
			</div>
		);
	}
}

export default App;
