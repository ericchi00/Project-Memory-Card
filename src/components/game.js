import React, { useState, useEffect } from 'react';
import Cards from './cards';
import Luffy from '../images/luffy.png';
import Zoro from '../images/zoro.png';
import Nami from '../images/nami.png';
import Usopp from '../images/usopp.png';
import Sanji from '../images/sanji.png';
import Chopper from '../images/chopper.png';
import Robin from '../images/robin.png';
import Franky from '../images/franky.png';
import Brook from '../images/brook.png';
import Jinbe from '../images/jinbe.png';

const initialState = [
	{
		img: Luffy,
		description: 'Captain',
		click: 0,
	},
	{
		img: Zoro,
		description: 'Swordsmen',
		click: 0,
	},
	{
		img: Nami,
		description: 'Navigator',
		click: 0,
	},
	{
		img: Usopp,
		description: 'Sniper',
		click: 0,
	},
	{
		img: Sanji,
		description: 'Cook',
		click: 0,
	},
	{
		img: Chopper,
		description: 'Doctor',
		click: 0,
	},
	{
		img: Robin,
		description: 'Archaeologist',
		click: 0,
	},
	{
		img: Franky,
		description: 'Shipwright',
		click: 0,
	},
	{
		img: Brook,
		description: 'Musician',
		click: 0,
	},
	{
		img: Jinbe,
		description: 'Helmsman',
		click: 0,
	},
];

const Game = (props) => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [images, setImages] = useState(initialState);

	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
		}
		if (score > 0) {
			setImages(shuffleArray(images));
		}
	}, [score]);

	const updateScore = () => {
		setScore(score + 1);
	};

	// change click to true if it's false, reset game if click is true
	const changeClick = (id) => {
		if (images[id].click === 0) {
			updateScore();
			setImages((prevState) => {
				return [
					...prevState.slice(0, id),
					{
						...prevState[id],
						click: 1,
					},
					...prevState.slice(id + 1),
				];
			});
		} else if (images[id].click === 1) {
			setScore(0);
			setImages(initialState);
		}
	};

	// shuffles array
	const shuffleArray = (arr) => {
		let shuffled = images
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
		return shuffled;
	};

	return (
		<>
			<header>
				<h1>One Piece Memory Game</h1>
				<p>
					Instructions: You can only click on a card once. If you click on it
					more than once, game will reset. To win, click on each card exactly
					once. Score is best out of 10.
				</p>
				<div className="score">Score : {score}</div>
				<div className="bestScore">Best Score: {bestScore}</div>
			</header>
			<div className="cardWrapper">
				<ul>
					{images.map((image, i) => {
						return (
							<Cards
								key={i}
								changeClick={() => changeClick(i)}
								img={images[i].img}
								description={images[i].description}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Game;
