function generateList(array) {
    // Створюємо елемент списку
    const list = document.createElement('ul');
  
    // Перебираємо масив
    for (let i = 0; i < array.length; i++) {
      // Створюємо елемент списку
      const listItem = document.createElement('li');
  
      // Якщо елемент масиву є масивом
      if (Array.isArray(array[i])) {
        // Рекурсивно генеруємо список з елементів масиву
        const sublist = generateList(array[i]);
        // Додаємо список до елементу списку
        listItem.appendChild(sublist);
      } else {
        // Якщо елемент масиву є числом
        // Створюємо текстовий вузол з числом
        const text = document.createTextNode(array[i]);
        // Додаємо текстовий вузол до елементу списку
        listItem.appendChild(text);
      }
  
      // Додаємо елемент списку до списку
      list.appendChild(listItem);
    }
  
    // Повертаємо список
    return list;
  }
  