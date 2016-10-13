import React from 'react'
import { connect } from 'react-redux'
import { add } from '../actions'

let AddCounter = ({ dispatch }) => {
	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault()
				dispatch(add())
			}}>
				<button type="submit">
					Add Counter
				</button>
			</form>
		</div>
	)
}

AddCounter = connect()(AddCounter)

export default AddCounter
