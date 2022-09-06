const clock = document.querySelector('.time');
const day = document.querySelector('.date');

function showClock() {
	const date = new Date();
	const currentClock = date.toLocaleTimeString();
	clock.textContent = currentClock;
	showDate();
}

function showDate() {
	const date = new Date();
	const dayOfWeek = date.getDay();
	const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const settings = {
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC',
	};
	const currentDate = date.toLocaleDateString('en-Br', settings);
	day.textContent = `${daysOfWeek[dayOfWeek]}, ${currentDate}`;
}

setInterval(showClock, 1000)

export default showClock();