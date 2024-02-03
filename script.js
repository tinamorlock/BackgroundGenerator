let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');

function updateGradientBackground() {
    let linearGradient = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    body.style.background = linearGradient;
    css.textContent = 'background: ' + body.style.background + ';';

}

// sets initial bg to the placeholder values in the input
// and displays CSS code before user changes with color picker
updateGradientBackground();

color1.addEventListener('input', updateGradientBackground);
color2.addEventListener('input', updateGradientBackground);