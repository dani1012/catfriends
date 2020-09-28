import * as actions from './actions';

//give access to fake store for testing
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';



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

/*	Dispatches an action through the mock store. 
    The action will be stored in an array inside the instance and executed.
	Returns the actions of the mock store.*/

it('should be pending and success', async () => {
	//using store.dispatch(actions.requestRobots(testingAPIurl)).then() received zero assertion calls
    //therefore using async await instead 
    expect.assertions(3)
	const store = mockStore();

	 // Testing API ↓
    const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
    await store.dispatch(actions.requestRobots(testingAPIurl))
    const action = store.getActions()
  
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

