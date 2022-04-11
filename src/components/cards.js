import React, { useState } from 'react';

const Cards = (props) => {
	const [click, setClick] = useState('false');
	const { updateScore, resetGame } = props;

	const changeClick = () => {
		if (click === 'false') {
			setClick('true');
			updateScore();
		} else {
            resetGame();
            // figure out how to reset all cards to false
		}
	};

	return (
		<li>
			<div className="card" onClick={changeClick}>
				{click}
				<img src="" alt=""></img>
				<h3>className</h3>
			</div>
		</li>
	);
};

export default Cards;
