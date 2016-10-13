import { connect } from 'react-redux'
import Footer from '../components/Footer.js'

const mapStateToProps = (state) => {
	return {
		counterNumber: state.counters.length
	}
}

const FooterContainer = connect(mapStateToProps)(Footer)

export default FooterContainer
