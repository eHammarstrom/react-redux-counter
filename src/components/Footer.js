import React, { Component, PropTypes } from 'react'
import './Footer.css'

class Footer extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return(
			<div className="Footer">
				<h3># of counters {this.props.counterNumber}</h3>
			</div>
		)
	}
}

Footer.propTypes = {
	counterNumber: PropTypes.number.isRequired
}

export default Footer
