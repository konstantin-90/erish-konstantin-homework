// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// sum(3) = 3 
// sum(5) = 8
// sum(20) = 28

function chain(n) { // создал функцию chain. которая принимает параметр
    return function(plus) { // функция возвращает функцию с названием plus
        return n + plus; // функция plus возвращает результат сложения параметра в функции chain и результат самой функции plus
    }
}

const myChain = chain(5);

console.log(myChain(3));
console.log(myChain(5));
console.log(myChain(9));