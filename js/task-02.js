const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients')

ingredients.forEach(ingredient => {
    const listElement = document.createElement('li');
    listElement.textContent = ingredient;
    list.append(listElement)
})
    
    console.log(list)
