// Все стірлочними!!!!!!!!!
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let array = [1,2,5,7]
let calc = (array)=> {
    let sum = 0;
    for (const item of array) {
        sum += item;
        sum = item + sum;
    }
    return sum/array.length
        }
console.log(calc(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let min = (...arg) => {
    // console.log(arg);
    let min = arg[0];
    let max = arg[0];
    for (const item of arg) {
        if (item<min){
            min = item
        }
        if (item> max){
            max = item
        }
    }
    console.log(max);
   return min;
}
console.log(min(1, 3, 5, 9, 0, -1));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let random = () => {
let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i]=Math.round(Math.random()*100);
            }
    return arr;
}
console.log(random());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let random1 = (limit) => {
    let arr = [];
    for (let i = 0; i < limit; i++) {
        arr[i]=Math.round(Math.random()*100);
    }
    return arr;
}
console.log(random1(7));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let array2 = [1,2,3]
let roder = (array2) => {
    let newarr= []
    for (let i = array2.length - 1,j=0; i >= 0; i--, j++) {
        newarr[j]=array2[i];
    }
    return newarr
}
console.log(roder(array2));

// // -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let arrray = [
    {
        age:22
    },
    {
        age:33
    }
];
let change = (aply) => {
    let temp = aply[0];
    aply[0] = aply[1];
    aply[1] = temp;
    return aply;
}
console.log(change(arrray));
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle = (a,b) => a*b;
console.log(rectangle(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle = (r) => 3.14*Math.pow(r,2)
console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cilinder = (r,h) => 3.14 * h * r * 2
console.log(cilinder(2, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr5 = [1,2,3,4]
let funk = (arr5) => {
    for (const item of arr5) {
        console.log(item);
    }
}
funk(arr5)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = (text) => document.write(`<p>${text}</p>`);
text('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
ulli('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ullic = (text,num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
       document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
ullic('hello',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array7 = [1,'hello', true];

let text2 = (array) => {
    document.write(`<ul>`)
    for (let i = 0; i < array7.length; i++) {
        document.write(`<li>${array7[i]}</li>`)
    }
    document.write(`</ul>`)

}
text2([array7])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let block = [
    {
        id:1,
        name: 'Diana',
        age: 24
    },
    {
        id:2,
        name: 'Danulo',
        age:16
    }
];

let foo = (x) => {
    for (const item of block) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`);
    }
    }

    foo(block)

// - створити функцію яка повертає найменьше число з масиву
let numbers = [3,5,-1,7];

let b = (numbers) => {
    let y = numbers[0];
    for (const item of numbers) {
        if (item < y) {
            y = item;
        }
    }
    return y;
}
console.log(b(numbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let array9 = [1,2,3]
let sum = (array9) => {
    let sum = 0;
    for (const item of array9) {
        sum += item;
    }
    return sum;
}
console.log(sum(array9));
