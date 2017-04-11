import React, { Component } from 'react'
import './Contact.scss';

class Contacts extends Component {

	render() {
		return(
			<ul className="Contact">
				<li className="Contact-Items">{this.props.value}</li>
			</ul>
		)
	}
}

export default Contacts