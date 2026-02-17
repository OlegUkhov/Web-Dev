let count = 0;

const counter = document.getElementById('counter-value');
const decrease = document.getElementById('decrease-btn');
const increase = document.getElementById('increase-btn');
const reset = document.getElementById('reset-btn');

function updateDisplay(){
    counter.textContent = count;
    counter.classList.remove('positive', 'negative', 'zero');

    if (count > 0) counter.classList.add('positive');
    else if (count < 0) counter.classList.add('negative');
    else counter.classList.add('zero')
}

increase.addEventListener('click', () => { count++; updateDisplay(); });
decrease.addEventListener('click', () => {count--; updateDisplay(); });
reset.addEventListener('click', () => {count = 0; updateDisplay(); });

updateDisplay();