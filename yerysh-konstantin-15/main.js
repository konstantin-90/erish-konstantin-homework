// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


// Наприклад:

// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// // Результат: [1, 2, 3, 4, 6, 7]


const array = [1, 2, 3, 'sg4', 5, 'gh', {}];


function removeElement(anyArr, index) { // прописал функцию. С нужным названием
    const result = anyArr.splice(index - 1, 1); // прописал новую переменую, которая обчисляется через метод splice. Находит индекс, который вводит пользователь(item) и минус 1 индекс.

    return result;
}

removeElement(array, 7);

console.log(array);

