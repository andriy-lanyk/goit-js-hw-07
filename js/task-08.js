const buttonCreate = document.querySelector('[data-action="render"]');
const buttonClear = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('input');
const boxContainer = document.querySelector('#boxes');
const randomRgbColor = () => Math.floor(Math.random() * (255 - 0 + 1)) + 0;
const divSize = 30;
const stepDivSize = 10;


buttonCreate.addEventListener('click', createBoxes);
console.log(buttonCreate)
buttonClear.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
    amount = input.value;

    const arrayOfNewDivs = [];
    for (let i = 1; i <= amount; i += 1) {
        const newDiv = `<div style="background-color: rgb(${randomRgbColor()}, ${randomRgbColor()}, ${randomRgbColor()}); width: ${divSize + (i - 1) * 10}px; height: ${divSize + (i - 1) * 10}px;"></div>`;
    arrayOfNewDivs.push(newDiv);
    }
    
    boxContainer.insertAdjacentHTML("afterbegin", arrayOfNewDivs.join(''));
    
}

function destroyBoxes() {
    const childElements = boxContainer.children;
    [...childElements].forEach(child => child.remove());
}



