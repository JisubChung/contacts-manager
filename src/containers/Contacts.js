import React, { Component } from 'react'
import './Contacts.scss';

class Contacts extends Component {

	render() {
		const { clickedPhoto } = this.props;
		return(
			<ul className="contacts">
				<li>
					<ul className="contact">
						<li className="photo"><h3>Photo</h3></li>
						<li className="name"><h3>Name</h3></li>
						<li className="phone"><h3>Phone</h3></li>
						<li className="email"><h3>Email</h3></li>
						<li className="group"><h3>Groups</h3></li>
					</ul>
				</li>
			</ul>
		)
	}
}

export default Contacts