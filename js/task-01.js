const categories = document.querySelectorAll('.item');
console.log(`В списке ${categories.length} категории.`);

for (const element of categories) {
    const numberOfElementsInCategories = element.querySelectorAll('li').length;
    const categoriesTitle = element.firstElementChild.textContent
    
    console.log(`Категория: ${categoriesTitle}, количество элементов: ${numberOfElementsInCategories}`)
}

