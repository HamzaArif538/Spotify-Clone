console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Let me love You", filePath:"songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "bandook", filePath:"songs/Bandook.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bhai Log", filePath:"songs/Bhai_Log.mp3", coverPath: "covers/3.jpg"},
    {songName: "Gede", filePath:"songs/Gede.mp3", coverPath: "covers/4.jpg"},
    {songName: "Imaginary", filePath:"songs/Imaginary.mp3", coverPath: "covers/5.jpg"},
    {songName: "Kaash", filePath:"songs/Kaash.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ma Belle", filePath:"songs/Ma Belle.mp3", coverPath: "covers/7.jpg"},
    {songName: "No Competition ", filePath:"songs/No Competition.mp3", coverPath: "covers/8.jpg"},
    {songName: "Excuses", filePath:"songs/Excuses.mp3", coverPath: "covers/9.jpg"},
    {songName: "gede", filePath:"songs/Excuses.mp3", coverPath: "covers/1.jpg"}
]

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});




//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})



// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


// changing 

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
    })
})



