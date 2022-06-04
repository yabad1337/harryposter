import React from 'react';

const SearchBox = ({searchbox}) => {
	return (
		<div>
			<input 
				type="search" 
				placeholder="e.g. harry potter" 
				className="bg-lightest-blue pa3 ba b--green ma2 br3"
				onChange={searchbox}
				/>
		</div>
	);
}

export default SearchBox;