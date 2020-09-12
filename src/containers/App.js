import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';

import MainPage from '../components/MainPage';
import './App.css';


const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobotsReducer.searchField,
		robots: state.requestRobotsReducer.robots,
		isPending: state.requestRobotsReducer.isPending,
		error: state.requestRobotsReducer.error
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots:  () => dispatch(requestRobots())
	}
}


class App extends Component {

	render() {
		return (
		<MainPage {...this.props}/> 
		)
			   
	}		 
 	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




