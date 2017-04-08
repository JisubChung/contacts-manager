import React, { Component } from 'react'
import './Contacts.scss';

class Contacts extends Component {

	render() {
		return(
			<li>{this.props.value}</li>
		)
	}
}

export default Contacts