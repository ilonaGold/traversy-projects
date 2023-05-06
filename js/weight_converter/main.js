let output = document.getElementById('output');
output.style.visibility = 'hidden';
let pounds = document.getElementById('lbsInput');
let grams = document.getElementById('gramsOutput');
let kg = document.getElementById('kgOutput');
let oz = document.getElementById('ozOutput');

pounds.addEventListener('input', function (e) {
  output.style.visibility = 'visible';
  let lbs = e.target.value;
  grams.textContent = (lbs / 0.0022046).toFixed(2);
  kg.textContent = (lbs / 2.2046).toFixed(2);
  oz.textContent = (lbs * 16).toFixed(2);
});
