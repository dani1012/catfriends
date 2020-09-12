import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import nock from 'nock';



const mockStore = configureMockStore([thunkMiddleware]);

describe('searchRobotsAction', () => {
it('should create an action to search robots', () => {
	const text = 'Leanne';
	const expectedAction = {
	  type: 'CHANGE_SEARCH_FIELD',
      payload: text
	};
	expect(actions.setSearchField(text)).toEqual(expectedAction)
})

})


describe("requestRobotsAction", ()=>{

it('handles requesting robots API', () => {
	expect.assertions(1)
	const store = mockStore();

	//Dispatches an action through the mock store. The action will be stored in an array inside the instance and executed.
	store.dispatch(actions.requestRobots());
	//Returns the actions of the mock store.
	const action = store.getActions();

	const expectedAction = {type: 'REQUEST_ROBOTS_PENDING'};
	expect(action[0]).toEqual(expectedAction)
})


it('should be pending and success', async () => {

	//store.dispatch(actions.requestRobots(testingAPIurl)).then() doesn't work , therefore using async await instead
    expect.assertions(3)
	const store = mockStore();

	 // Testing API ↓
    const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
    await store.dispatch(actions.requestRobots(testingAPIurl))
    const action = store.getActions()
    console.log('action', action[1].payload)
    expect(action[0].type).toEqual('REQUEST_ROBOTS_PENDING')
    expect(action[1].type).toEqual('REQUEST_ROBOTS_SUCCESS')
    expect(action[1].payload).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
        })
 	
})



it('should be pending and fail', async () => {
    expect.assertions(2)
	const store = mockStore({});

    // Testing wrong API ↓
    const wrongAPIurl = 'https://jsonplacehol'
    await store.dispatch(actions.requestRobots(wrongAPIurl))
    const action = store.getActions()

    expect(action[0].type).toEqual('REQUEST_ROBOTS_PENDING')
    expect(action[1].type).toEqual('REQUEST_ROBOTS_FAILED')
 
})

})