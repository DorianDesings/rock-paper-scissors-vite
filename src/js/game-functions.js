import { GAME_IMAGES, GAME_RULES } from './constants';
import {
	gameItemsElement,
	gameResultsElement,
	modalElement,
	pickedPcImageElement,
	pickedUserImageElement,
	pointsPcElement,
	pointsUserElement,
	resultElement
} from './dom';

const gameOptions = ['rock', 'paper', 'scissors'];

let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;
let showResults = false;

const updateScore = () => {
	pointsUserElement.textContent = userPoints;
	pointsPcElement.textContent = pcPoints;
};

const changeScreen = () => {
	if (showResults) {
		gameItemsElement.classList.add('hide');
		gameResultsElement.classList.remove('hide');
	} else {
		gameItemsElement.classList.remove('hide');
		gameResultsElement.classList.add('hide');
	}
};

const printResultsImage = () => {
	const userOldClass = pickedUserImageElement.parentElement.classList[2];
	const pcOldClass = pickedPcImageElement.parentElement.classList[2];

	console.log(GAME_IMAGES[userSelection.toUpperCase()]);
	pickedUserImageElement.src = GAME_IMAGES[userSelection.toUpperCase()];
	pickedPcImageElement.src = GAME_IMAGES[pcSelection.toUpperCase()];

	if (userOldClass && pcOldClass) {
		pickedUserImageElement.parentElement.classList.replace(
			userOldClass,
			`game-item--${userSelection}`
		);
		pickedPcImageElement.parentElement.classList.replace(
			pcOldClass,
			`game-item--${pcSelection}`
		);
	} else {
		pickedUserImageElement.parentElement.classList.add(
			`game-item--${userSelection}`
		);
		pickedPcImageElement.parentElement.classList.add(
			`game-item--${pcSelection}`
		);
	}

	showResults = true;

	changeScreen();
};

const checkWinner = () => {
	if (userSelection === pcSelection) {
		resultElement.textContent = 'TIE';
		return;
	}

	if (GAME_RULES[userSelection][pcSelection]) {
		resultElement.textContent = 'YOU WIN';
		userPoints++;
	} else {
		resultElement.textContent = 'YOU LOSE';
		pcPoints++;
	}

	updateScore();
};

const generateRandomPlay = () => {
	const randomPlay = Math.floor(Math.random() * gameOptions.length);
	const pcPlay = gameOptions[randomPlay];
	pcSelection = pcPlay;
	checkWinner();
	printResultsImage();
};

const setUserSelection = item => {
	userSelection = item;
	generateRandomPlay();
};

const playAgain = () => {
	showResults = false;
	changeScreen();
};

const showModal = () => {
	modalElement.classList.add('modal--show');
};

const hideModal = () => {
	modalElement.classList.remove('modal--show');
};

export {
	changeScreen,
	checkWinner,
	gameOptions,
	generateRandomPlay,
	hideModal,
	playAgain,
	printResultsImage,
	setUserSelection,
	showModal,
	updateScore
};
