import React, { useState, useEffect } from 'react';
import Cards from './cards';

const Game = () => {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
		}
	}, [score]);

	const updateScore = () => {
		setScore(score + 1);
	};

	const resetGame = () => {
		setScore(0);
	};

	return (
		<>
			<header>
				<h1>Memory Card</h1>
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
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
					<Cards updateScore={updateScore} resetGame={resetGame} />
				</ul>
			</div>
		</>
	);
};

export default Game;
