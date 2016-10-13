import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import CounterList from '../components/CounterList'

const mapStateToProps = (state) => {
	return {
		counters: state.counters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		incrementClick: (id) => {
			dispatch(increment(id))
		},
		decrementClick: (id) => {
			dispatch(decrement(id))
		}
	}
}

const CounterListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList)

export default CounterListContainer
