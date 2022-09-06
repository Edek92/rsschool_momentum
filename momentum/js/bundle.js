/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/audioPlayer.js":
/*!***************************!*\
  !*** ./js/audioPlayer.js ***!
  \***************************/
/***/ (() => {

const playList = [
    {      
      title: 'Aqua Caelestis',
      src: 'assets/sounds/Aqua_Caelestis.mp3',
      duration: 40
    },  
    {      
      title: 'River Flows In You',
      src: 'assets/sounds/River_Flows_In_You.mp3',
      duration: 97
    },
    {      
        title: 'Summer Wind',
        src: 'assets/sounds/Summer_Wind.mp3',
        duration: 111
    },
    {      
        title: 'Ennio Morricone',
        src: 'assets/sounds/Ennio_Morricone.mp3',
        duration: 97
    }
]

const playBtn = document.querySelector('.play');
const arrowLeftAudio = document.querySelector('.play-prev');
const arrowRightAudio = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

let audio = new Audio ();
let isPlay = false;

let playNum = 0;

audio.currentTime = 0;

for (let elem of playList) {
    let li = document.createElement('li');
    li.classList.add ('play-item');
    li.textContent = elem.title;
    playListContainer.append(li);
}

function playNext () {
    if (playNum < playList.length - 1) {
        playNum++;
    } else if (playNum >= playList.length - 1) {
        playNum = 0
    }

    !isPlay ? isPlay = true : isPlay = false;

    playAudio ();
}

function playPrev () {
    if (playNum > 0) {
        playNum--;
    } else if (playNum <= 0) {
        playNum = playList.length - 1;
    }

    !isPlay ? isPlay = true : isPlay = false;
    playAudio ();
}

function playAudio () {
    let arrayOfLi = document.querySelectorAll('li');

    arrayOfLi.forEach((elem) => {
        elem.classList.remove('item-active');
    })

    audio.src = playList[playNum].src;

    if (!isPlay) {
        audio.play();
        isPlay = true;
        audio.addEventListener('ended', playNext);
        playBtn.classList.add('pause');
    } else {
        audio.pause();
        isPlay = false;
        playBtn.classList.remove('pause');
    }
    arrayOfLi[playNum].classList.toggle('item-active');
}


playBtn.addEventListener('click', playAudio);
arrowLeftAudio.addEventListener('click', playPrev);
arrowRightAudio.addEventListener('click', playNext);

/***/ }),

/***/ "./js/greeting.js":
/*!************************!*\
  !*** ./js/greeting.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showGreeting());

/***/ }),

/***/ "./js/quotes.js":
/*!**********************!*\
  !*** ./js/quotes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const buttonQuote = document.querySelector('.change-quote');
const en = document.querySelector('#en');
const ru = document.querySelector('#ru');

let prevRandom = 1;
let languageChange = 'en';

async function getQuotes(lang) {
    let random = Math.floor(Math.random() * 8);
    if (random === prevRandom && random > 0) {
        random--
        prevRandom = random;
    } else if  (random === prevRandom && random === 0){
        random++
        prevRandom = random;
    } else {
        prevRandom = random;
    }
    let link = 'assets/quotes.json';
    const res = await fetch(link);
    const data = await res.json();
    console.log(data);
    quote.innerHTML = data[random][lang].text;
    if (data[random].author === null) {
        author.innerHTML = 'Unknown author'
    } else {
        author.innerHTML = data[random][lang].author;
    }
}

buttonQuote.addEventListener('click', () => {
    getQuotes(languageChange);
})

en.addEventListener('click', () => {
    en.classList.add('language__item_active');
    ru.classList.remove('language__item_active');
    languageChange = 'en'
    getQuotes(languageChange);
})

ru.addEventListener('click', () => {
    ru.classList.add('language__item_active');
    en.classList.remove('language__item_active');
    languageChange = 'bel'
    getQuotes(languageChange);
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQuotes(languageChange));

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setBackground());

/***/ }),

/***/ "./js/time.js":
/*!********************!*\
  !*** ./js/time.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showClock());

/***/ }),

/***/ "./js/weather.js":
/*!***********************!*\
  !*** ./js/weather.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherIcon = document.querySelector('.weather-icon');
const weatherTemperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

if (!localStorage.getItem("city")) {
    city.value = 'Minsk';
} else if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
};

let language = '';

let link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;

city.addEventListener('blur', () => {
    link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;
    getWeather();
});

async function getWeather (lang = 'en') {
    window.addEventListener('load', pullMemory);
    
    const result = await fetch(link);
    const data = await result.json();

    language = lang;
    link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${language}&appid=24ecd31bd4477ba754c5712f004e1a1f&units=metric`;
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherTemperature.innerHTML = `${Math.round(data.main.temp)} °C`;
    weatherDescription.innerHTML = data.weather[0].description;
    wind.innerHTML = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    window.addEventListener('beforeunload', pushMemory);
}

function pushMemory() {
	localStorage.setItem("city", city.value);
}

function pullMemory() {
	if (localStorage.getItem("city")) {
		city.value = localStorage.getItem("city");
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather());

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./js/time.js");
/* harmony import */ var _audioPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audioPlayer */ "./js/audioPlayer.js");
/* harmony import */ var _audioPlayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_audioPlayer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ "./js/weather.js");
/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greeting */ "./js/greeting.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quotes */ "./js/quotes.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider */ "./js/slider.js");







})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map