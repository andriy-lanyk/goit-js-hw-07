const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')
const arrayAddList = [];

ingredients.forEach(ingredient => {
    const listElement = document.createElement('li');
  listElement.textContent = ingredient;
  arrayAddList.push(listElement);
})

list.append(...arrayAddList);
