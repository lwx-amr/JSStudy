const checkboxs = document.querySelectorAll('input[type=checkbox]');

checkboxs.forEach(input => input.addEventListener('click', handleCheck));

let lastChecked, inBetween = false;
function handleCheck (e){
    if(e.shiftKey && this.checked){
        checkboxs.forEach(input => {
            if(input === lastChecked || input === this) inBetween = !inBetween;
            if(inBetween) input.checked = true;
        });
    }
    lastChecked = this;
}