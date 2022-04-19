// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let a;
a = 'hello';
alert (a)

let b;
b = 'owu';
document.write(b)

let c;
c = 'com';
document.write(c)

let d;
d = 'ua';
console.log(d)

var e;
e = '1'
console.log(e)

var f;
f = '10'
alert (f)

let g = (-999)
console.log(g)

let h = (123)
alert (h)

const i = 3.14;
document.write(i)

let j = 2.7
console.log(j)

let k = 16
alert (k)

let booll = 24 < 25;
console.log(booll);

let m = 10 === '10';
console.log(m)

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)

let book = {
    name:'The Hobbit',
    pages: 380,
    genre: 'fantasy'
}
console.log (book);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

let books = {
    name:'The Hobbit',
    pages: 380,
    genre: 'fantasy',
    authors: [
        'PeterJackson',
        'FranWalsh',
        'ZaneWeiner',
    ]
}

console.log(books);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Diana'
let middleName = 'Romanivna'
let lastName = 'Nechayeva'
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let box1 = prompt ('Diana')
let box2 = prompt('Nechayeva')
let box3 = prompt('Romanivna')

let res = `${box1} ${box2} ${box3}`
console.log (res)

// // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// //     let a = 100; let b = '100'; let c = true;

let x = 100;
console.log(typeof x);

let y = '100';
console.log(typeof y);

let z = true;
console.log(typeof z);
//
// // - Створити масив об'єктів з назвою books з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
let bookss= [
    {name: 'java', pages: 321, genre:'documental', authors: [ 'january', 'february']},
    {name: 'pyhton', pages: 123, genre:'documental', authors: [ 'march', 'april']},
    {name: 'react', pages: 444, genre:'documental', authors: [ 'june', 'july']},
]

console.log(bookss[0]);
console.log(bookss[1]);
console.log(bookss[2]);

