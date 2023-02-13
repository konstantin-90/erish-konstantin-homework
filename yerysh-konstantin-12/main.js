// Створити масив, довжину та елементи якого задає користувач.

let masNumber = function (num) {
  let even = 0, odd = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
      even++ 
    }
       else {
        odd++;
       }
  }
  return [even, odd];
}

let log = masNumber('3234352');

console.log(log)


// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

