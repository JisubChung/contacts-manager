import React, { Component } from 'react';
import { createStore } from 'redux';
import contact from './reducer/contact';
import Contact from './Contact';
import './App.scss';

const store = createStore(contact);

class App extends Component {
	// var contacts = this.props;

	render() {
		return (
			<div>
				<ul className="contacts">
					<li>
						<ul className="contact">
							<li className="photo"><h3>Photo</h3></li>
							<li className="name"><h3>Name</h3></li>
							<li className="phone"><h3>Phone</h3></li>
							<li className="email"><h3>Email</h3></li>
							<li className="group"><h3>Groups</h3></li>
						</ul>
							<Contact
								value={store.getState()}
								clickedPhoto={() => store.dispatch({ type: 'INCREMENT' })}
							/>
					</li>
				</ul>
			</div>
		);
	}
}

export default App;