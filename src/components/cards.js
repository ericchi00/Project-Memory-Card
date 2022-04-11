import React from 'react';

const Cards = ({ changeClick, img, description }) => {
	return (
		<li>
			<div className="card" onClick={changeClick}>
				<img src={img} alt={description} />
				<h3>{description}</h3>
			</div>
		</li>
	);
};

export default Cards;
