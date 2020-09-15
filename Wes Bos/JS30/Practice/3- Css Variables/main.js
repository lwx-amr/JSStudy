// Selecting all control inputs
const controlInputs = document.querySelectorAll('.controls input');

// Change css variable
function handleChange(){
    let unit = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value+unit);
}

// Listeners for change event
controlInputs.forEach( input => input.addEventListener('change', handleChange));
controlInputs.forEach( input => input.addEventListener('mousemove', handleChange));