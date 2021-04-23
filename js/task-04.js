const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let value = 0;
const decrement = () => {
    value -= 1;
    counterValue.innerHTML = value;
}

const increment = () => {
    value += 1;
    counterValue.innerHTML = value;
}

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
