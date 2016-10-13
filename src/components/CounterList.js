import React, { Component, PropTypes } from 'react'
import Counter from './Counter'

class CounterList extends Component {
	constructor(props) {
		super(props)
		this.props = props
	}

	render() {
		return (
			<div className="CounterList">
				{
					this.props.counters.map((counter, index) => {
						return (<Counter
							key={index}
							value={counter}
							incrementClick={() => this.props.incrementClick(index)}
							decrementClick={() => this.props.decrementClick(index)}
						/>)
					})
				}
			</div>
		)
	}
}

CounterList.propTypes = {
	counters: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
	incrementClick: PropTypes.func.isRequired,
	decrementClick: PropTypes.func.isRequired
}

export default CounterList
