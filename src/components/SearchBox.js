import React from 'react';

const SearchBox = ({searchChange})=> {

	return (
	 <div className = 'pa3'>
	   <input 
	       aria-label = 'Search cats'
	       className = 'pa3 ba b--green bg-lightest-blue'
		   type = 'search' 
		   placeholder = 'search cats by name'
		   onChange = {searchChange}
	   />
	 </div>
	)
}



export default SearchBox;