const greeting = document.querySelector('.greeting');
const greetingInput = document.querySelector('.name');

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

function showGreeting() {
	greeting.textContent = `Good ${getTimeOfDay()}`;
	greetingInput.placeholder = '[Enter Name]';
	window.addEventListener('beforeunload', pushInMemory);
	window.addEventListener('load', pullInMemory);
}

function pushInMemory() {
	localStorage.setItem("greetingInput", greetingInput.value);
}

function pullInMemory() {
	if (localStorage.getItem("greetingInput")) {
		greetingInput.value = localStorage.getItem("greetingInput");
	}
}


export default showGreeting();