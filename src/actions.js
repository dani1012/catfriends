import { apiCall } from './api/api';

export const setSearchField = (text) => {

	return {
      type: 'CHANGE_SEARCH_FIELD',
      payload: text
  }

}


export const requestRobots = (apiLink = 'https://jsonplaceholder.typicode.com/users') => 
	   async (dispatch) => {
	
		  try{

		  	dispatch({type: 'REQUEST_ROBOTS_PENDING'});
			const users = await apiCall(apiLink);
		    dispatch({ type:'REQUEST_ROBOTS_SUCCESS', payload: users });

		    }catch(error) {
		  	dispatch({ type: 'REQUEST_ROBOTS_FAILED', payload: error })
		  }
    
}