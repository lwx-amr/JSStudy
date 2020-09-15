// Variables
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    searchInput = document.querySelector('.search'),
    suggestions = document.querySelector('.suggestions'),
    citiesArray = [];

// Fetch objects array
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => citiesArray.push(...data));

// Run regex to find matched objects
function regexRunner(value){
    const regex = new RegExp(value, 'gi');
    return citiesArray.filter(obj => {
        return obj.city.match(regex) || obj.state.match(regex); 
    })
}

// Convert number to number with commas
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Get matched from runner and append to html div
function findMatched(){
    const value = this.value;
    const matchedPlaces = regexRunner(value);
    const html = matchedPlaces.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        const pop = numberWithCommas(place.population);
        return `<li><span class="name">${cityName}, ${stateName}</span><span class="population">${pop}</span></li>`;
    }).join('');
    suggestions.innerHTML = html;
}

// Event Listeners for search input
searchInput.addEventListener('change', findMatched);
searchInput.addEventListener('keyup', findMatched);
