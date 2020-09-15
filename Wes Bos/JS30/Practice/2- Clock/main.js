// Variables
const hoursHand = document.querySelector('.hour-hand'),
    mintsHand = document.querySelector('.min-hand'),
    scndsHand = document.querySelector('.second-hand');

// Calc exact position for hours arm
const hCalcer = () => {
    return (this.date.getHours()*30) + (this.date.getMinutes()*0.5);
}

// Calc exact position for minutes arm
const mCalcer = () => {
    return (this.date.getMinutes()*6) + (this.date.getSeconds()*0.1);
}

// Calc exact position for seconds arm
const sCalcer = () => {
    return (this.date.getSeconds()*6);
}

// To run the s.s.3 calcers
const calcerRunner = () => {
    this.date = new Date();
    hoursHand.style.transform =`rotate(${90 + hCalcer()}deg)`;
    mintsHand.style.transform =`rotate(${90 + mCalcer()}deg)`;
    scndsHand.style.transform =`rotate(${90 + sCalcer()}deg)`;
}

// Runner our code
calcerRunner(); // For the first time after loadind
setInterval(calcerRunner, 1000);
