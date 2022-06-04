import React from 'react';
import Card from './card';

const CardList = ({ chars }) => {
	return (
		<div>
			{
				chars.map((user, i) => {
					return (<Card key={chars[i].id} image={chars[i].image} name={chars[i].character} house={chars[i].hogwartsHouse}/>);
				})
			}
		</div>
	);
}

export default CardList;