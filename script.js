const video=document.querySelector('video')
const progressRange=document.querySelector('.progress-range')
const progressBar=document.querySelector('.progress-bar')
const playBtn=document.querySelector('#play-btn')
const volumeIcon=document.querySelector('.volume-icon')
const volumeRange=document.querySelector('.volume-range')
const volumeBar=document.querySelector('.volume-bar')
const currentTime=document.querySelector('.time-elapsed')
const duration=document.querySelector('.time-duration')
const fullScreenBtn=document.querySelector('.fullscreen')

// Play & Pause ----------------------------------- //
const togglePlay=()=>{
    if(video.paused){
        video.play()

        playBtn.classList.replace('fa-play','fa-pause')
    }else{
        video.pause()

        playBtn.classList.replace('fa-pause','fa-play')
    }
}


// Progress Bar ---------------------------------- //



// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// Event Listner
playBtn.addEventListener('click',togglePlay)
video.addEventListener('click',togglePlay)
