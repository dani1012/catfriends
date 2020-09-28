import * as reducers from './reducers';


describe('searchRobots', () => {

const initialStateSearch = {
	searchField: ''
}


it('should return initial state', () => {
	expect(reducers.searchRobotsReducer(undefined, {})).toEqual(initialStateSearch)
})


it('should handle CHANGE_SEARCH_FIELD', () => {
	expect(reducers.searchRobotsReducer(initialStateSearch, {
		type: 'CHANGE_SEARCH_FIELD',
		payload: 'abc'
	})).toEqual({
		searchField: 'abc'
	})
})

})



describe('requestRobots', () =>{

const initialStateRobots = {
	robots: [],
	isPending: false,
	error: ''
}

it('should return initial state', () => {
	expect(reducers.requestRobotsReducer(undefined, {})).toEqual(initialStateRobots)
})


it('should handle REQUEST_ROBOTS_PENDING', () => {
	expect(reducers.requestRobotsReducer(initialStateRobots, {
		type: 'REQUEST_ROBOTS_PENDING'
	})).toEqual({
		robots: [],
		isPending: true,
		error: ''
	})
})

it('should handle REQUEST_ROBOTS_SUCCESS', () => {
	expect(reducers.requestRobotsReducer(initialStateRobots, {
		type: 'REQUEST_ROBOTS_SUCCESS',
		payload: [{
		    id: 1,
		    name: "Leanne Graham",
		    email: "Sincere@april.biz"
		}]
	})).toEqual({
		robots: [{
		    id: 1,
		    name: "Leanne Graham",
		    email: "Sincere@april.biz"
		}],
		isPending: false,
		error: ''
	})
})

it('should handle REQUEST_ROBOTS_FAILED', () => {
	expect(reducers.requestRobotsReducer(initialStateRobots, {
		type: 'REQUEST_ROBOTS_FAILED',
		payload: 'Errorrrrr!!!'
	})).toEqual({
		robots: [],
		isPending: false,
		error: 'Errorrrrr!!!'
	})
})

})