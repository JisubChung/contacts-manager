import React, { Component } from 'react';
import './App.scss';
import Header from '../components/Header';
import Contacts from '../components/Contacts';

const names = [
	'bob',
	'jones',
	'peter'
];

//TODO: fix this problem https://facebook.github.io/react/docs/lists-and-keys.html#keys
const listNames = names.map((names) =>
	<Contacts value={names} />
);

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<ul>
					{listNames}
				</ul>
			</div>
		)
	}
}

export default App;