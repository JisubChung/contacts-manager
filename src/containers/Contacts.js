import React, { Component } from 'react'
import Contact from '../components/Contact';
import './Contacts.scss';
import data from './data';

const names = data.contacts.map((contacts) =>
	<Contact key={contacts.ID} value={contacts.name} />
);

const phone = data.contacts.map((contacts) =>
	<Contact key={contacts.ID} value={contacts.phone} />
);

const email = data.contacts.map((contacts) =>
	<Contact key={contacts.ID} value={contacts.email} />
);

const photo = data.contacts.map((contacts) =>
	<Contact key={contacts.ID} value={contacts.photo} />
);

class Contacts extends Component {

	render() {
		return(
			<ul>
				<li className="Category">{names}</li>
				<li className="Category">{phone}</li>
				<li className="Category">{email}</li>
				<li className="Category">{photo}</li>
			</ul>
		)
	}
}

export default Contacts