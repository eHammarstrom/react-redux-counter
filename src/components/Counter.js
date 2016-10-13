import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div className="Counter">
				<p><b>{this.props.value}</b></p>
				<button
					onClick={this.props.decrementClick}>
					--
				</button>
				<button
					onClick={this.props.incrementClick}>
					++
				</button>
			</div>
		)
	}
}

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	decrementClick: PropTypes.func.isRequired,
	incrementClick: PropTypes.func.isRequired
}

export default Counter
