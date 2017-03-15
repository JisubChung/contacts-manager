import React, { Component } from 'react'
import './Contact.scss';

class Contact extends Component {

	render() {
		const { clickedPhoto } = this.props;
		return(
			<ul className="contact">
				<li className="photo" onClick={clickedPhoto}>photo</li>
				<li className="name">Name</li>
				<li className="phone">phone</li>
				<li className="email">email</li>
				<li className="group">group</li>
			</ul>
		)
	}
}

export default Contact