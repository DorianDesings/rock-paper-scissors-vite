import lizard from '../assets/images/icon-lizard.svg';
import paper from '../assets/images/icon-paper.svg';
import rock from '../assets/images/icon-rock.svg';
import scissors from '../assets/images/icon-scissors.svg';
import spock from '../assets/images/icon-spock.svg';

const GAME_RULES = {
	rock: {
		scissors: true,
		lizard: true,
		paper: false,
		spock: false
	},
	scissors: {
		paper: true,
		lizard: true,
		rock: false,
		spock: false
	},
	paper: {
		rock: true,
		spock: true,
		lizard: false,
		scissors: false
	},
	lizard: {
		paper: true,
		spock: true,
		scissors: false,
		rock: false
	},
	spock: {
		rock: true,
		scissors: true,
		paper: false,
		lizard: false
	}
};

const GAME_IMAGES = {
	ROCK: rock,
	PAPER: paper,
	SCISSORS: scissors,
	LIZARD: lizard,
	SPOCK: spock
};

export { GAME_IMAGES, GAME_RULES };
