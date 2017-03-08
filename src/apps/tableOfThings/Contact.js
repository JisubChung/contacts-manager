import React, { Component } from 'react'
import './Contact.scss';

class Contact extends Component {

	render() {
		const { value, clickedPhoto } = this.props
		return(
			<li>
				<ul className="contact">
					<li className="photo" onClick={clickedPhoto}>photo</li>
					<li className="name">Name</li>
					<li className="phone">phone</li>
					<li className="email">email</li>
					<li className="group">group</li>
				</ul>
			</li>
		)
	}
}

export default Contact