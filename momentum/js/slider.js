const body = document.querySelector('body');
const arrowLeft = document.querySelector('.slide-prev');
const arrowRight = document.querySelector('.slide-next');

function getTimeOfDay() {

	const day = new Date();
	const hour = day.getHours();

	if (hour >= 6 && hour < 12) {
		return 'morning'
	} else if (hour >= 12 && hour < 18) {
		return 'afternoon'
	} else if (hour >= 18 && hour <= 23) {
		return 'evening'
	} else if (hour >= 0 && hour < 6) {
		return 'night'
	}
}

function getRandomInt() {
	return Math.floor(Math.random() * 20 + 1);
}

let getRandomNum = getRandomInt();

function setBackground() {
	let timeOfDay = getTimeOfDay();
	let bgNum = getRandomNum;

	if (bgNum < 10) {
		bgNum = '0' + bgNum
	}

	const img = new Image();

	img.src = `https://raw.githubusercontent.com/Edek92/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`

	img.addEventListener('load', () => {
		body.style.backgroundImage = `url(${img.src})`
	});
}

setBackground();

function getSliderPrev() {
	if (getRandomNum == 1) {
		getRandomNum = 20;
	} else {
		getRandomNum--
	}
	setBackground();
}

function getSliderNext() {
	if (getRandomNum == 20) {
		getRandomNum = 1;
	} else {
		getRandomNum++
	}
	setBackground();
}

arrowLeft.addEventListener('click', getSliderPrev);
arrowRight.addEventListener('click', getSliderNext);


export default setBackground();