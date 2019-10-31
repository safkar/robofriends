import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {

	return (
		<div className ='pa2'>
		<input
		className = 'pa3 ba b--orange bg-darkest-blue'
		type = 'search' 
		placeholder = 'search players' 
		onChange ={searchChange}
		/>
</div>

		);
}


export default SearchBox;