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