import React, { Component } from 'react';
import { createStore } from 'redux';
import contact from './contact';
import Contact from './Contact';
import './App.scss';

const store = createStore(contact);

class App extends Component {
	render() {
		return (
			<div>
				<ul className="contacts">
					<Contact
						value = {store.getState()}
						clickedPhoto={() => store.dispatch({ type: 'INCREMENT' })}
					/>
				</ul>
			</div>
		);
	}
}

export default App;