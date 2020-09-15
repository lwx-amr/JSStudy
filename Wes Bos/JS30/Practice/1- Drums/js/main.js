// Fun to start sound attached to clicked key
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
          key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

// Fun to Remove transtion
function removeTransition(e){
    this.classList.remove('playing');
}

// Listen for click event
window.addEventListener('keydown', playSound);

// Listen to transision end;
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
