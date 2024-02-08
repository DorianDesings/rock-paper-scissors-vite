import {
	buttonRulesElement,
	gameItemsElement,
	modalElement,
	playAgainElement
} from './dom';
import {
	gameOptions,
	hideModal,
	playAgain,
	setUserSelection,
	showModal
} from './game-functions';

if (document.body.dataset.mode === 'advanced') {
	gameOptions.push('lizard', 'spock');
}

gameItemsElement.addEventListener('click', ev => {
	if (!ev.target.classList.contains('game-item')) return;
	setUserSelection(ev.target.dataset.item);
});

playAgainElement.addEventListener('click', playAgain);

buttonRulesElement.addEventListener('click', showModal);

modalElement.addEventListener('click', hideModal);
