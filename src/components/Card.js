import React from 'react';

const Card = ({name,email,id})=> {

	return (

    <div className = 'bg-light-green br2 dib pa3 ma2 grow bw2 shadow-5'>
	     <img alt = 'robots' src = {`https://robohash.org/set_set4/${id}/?size=200x200`}/>
	     <div>
	     	<h4>{name}</h4>
	     	<p>{email}</p>
	     </div>
    </div>	

		);

}

export default Card;