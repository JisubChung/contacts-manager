import React, { Component } from 'react';
import Header from '../components/Header';
import Contacts from './Contacts';


class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Contacts />
			</div>
		)
	}
}

export default App;