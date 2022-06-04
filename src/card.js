import React from 'react';

const Card = ({ image, name, house }) => {
	return (
		<div className="tc bg-light-green dib pa3 ma2 br3 grow">
			<img src={`${image}`} alt="avatar" width="250px" height="300px"/>
			<div>
				<h2 className="f4">{ name }</h2>
				<p>{ house }</p>
			</div>
		</div>
	);
}

export default Card;