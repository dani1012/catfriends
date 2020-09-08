import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setSearchField, requestRobots} from '../actions';
import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import Header from '../components/Header';




const mapStateToProps = (state) => {
	return {
		searchfield: state.searchRobotsReducer.searchfield,
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


componentDidMount() {
      this.props.onRequestRobots()
}


	render () {
		const {searchfield , onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(robot=> 
		      robot.name.toLowerCase().includes(searchfield.toLowerCase())
		)

	    return (
		  <div className = 'tc'>
			<Header/>
			<SearchBox searchChange = {onSearchChange}/>
			<Scroll>
			  { 
			  isPending ?<h1>Loading...</h1> :
				  <ErrorBoundary>
			        <CardList robots = {filteredRobots} />
			      </ErrorBoundary>
		      }
		    </Scroll>
	      </div>
	    );
    
}			 
 	
}

export default connect(mapStateToProps, mapDispatchToProps)(App);