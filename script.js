// console.log("Hello world:)");
//  <img id="theme-icon" src="./theme.png" alt="toggle theme"></img>
// <img id="setting-icon" src="./setting.png" alt="Settings"></img>
// <img id="logo" src="./music.png" alt="Sangeet"></img>
// #06113b

// splash screen 
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 3000);
});



// Music Player

// Initialize the variables

let songIndex = 0;
let audioElement = new Audio('1.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
// let themeIcon = document.getElementById('theme-icon');


let songs = [
    {songName:"Until I found You", filePath:"1.mp3.mp3"},

    {songName:"Chasing cars", filePath:"2.mp3.mp3"},
    
    {songName:"Matilda", filePath:"3.mp3.mp3"},

    {songName:"Night Changes", filePath:"4.mp3.mp3"},
    
    {songName:"I Like me beter", filePath:"5.mp3.mp3"},

    {songName:"Wavin Flag", filePath:"6.mp3.mp3"},
]

// audioElement.play();

// Listening to Events

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    // we have to update seekbar
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    progressBar.value = progress;
});
progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playBtn')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-chart-simple');
    })

}

Array.from(document.getElementsByClassName('playBtn')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-chart-simple');
        index = parseInt(e.target.id);
        audioElement.src = `${index}.mp3.mp3`;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(index >= 6){
        index = 0;
    }else{
        index += 1;
    }
    audioElement.src = `${index}.mp3.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(index <= 0){
        index = 0;
    }else{
        index -= 1;
    }
    audioElement.src = `${index}.mp3.mp3`;
    audioElement.play();
    audioElement.currentTime = 0;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

// Toggle theme script

let themeIcon = document.getElementById('theme-icon');
let navbar = document.querySelector('.navbar');
let homePage = document.querySelector('.homePage');
let anchor = document.getElementById('anchor');
let heading = document.querySelector('.heading');
let icons = document.querySelectorAll('.icons');

themeIcon.addEventListener('click', ()=>{
    if(navbar.style.color === "black"){
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-lightbulb');
        navbar.style.backgroundColor = "#06113b";
        navbar.style.color = "white";
        homePage.style.background = "url(./Images/richard-horvath-_nWaeTF6qo0-unsplash.jpg) no-repeat center center/cover";
        anchor.style.color = "white";
        heading.style.color = "white";
        icons.style.color = "white";
    }else{
        themeIcon.classList.remove('fa-lightbulb');
        themeIcon.classList.add('fa-moon');
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
        homePage.style.background = "url(./Images/adrian-infernus-GLf7bAwCdYg-unsplash.jpg) no-repeat center center/cover";
        anchor.style.color = "black";
        heading.style.color = "black";
        icons.style.color = "black";  
}
})







