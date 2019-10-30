import React from 'react';
import Card from './Card';

const CardList =({Knicks})=> {
	return (
	<div>
{Knicks.map((user,i)=> {
		return (
		<Card 
		key ={i} 
		id = {Knicks[i].id} 
		name={Knicks[i].name} 
		email={Knicks[i].email}
		/>
		); 
	})
}
	</div> 

		);
}



export default CardList;