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

export default getQuotes(languageChange);