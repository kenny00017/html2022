// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S (a,b) {
    return action = (a+b)*2
}

console.log(S(10,20))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function C(p,r) {
    return move = (p*(r*r))
}
console.log (C(3.14,20));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function Z(p,r,h){
    return magic = 2*p*r*h
}
console.log (Z(3.14,20,5))

// - створити функцію яка приймає масив та виводить кожен його елемент
let arraray =['two','words']

function A (array){
    for (const index of array) {
        console.log(index)
    }
}
A(arraray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function T(text){
    document.write(`<p>${text}</p>`)

}
T('many words')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function foo(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>

</ul>`)
}
foo('okten')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulli(text,num){
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
(`</ul>`)
}
ulli('hello',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let array=[1,2,'hello','bye',true,false]
function numtext (array){
    document.write(`<ul>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`)
    }
    (`</ul>`)

    }
numtext(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let objects=[
    {
        id:1,
        name:'Ebi',
        age:10,
    },
    {
        id:2,
        name:'Salmon',
        age:20,
    },
    {
        id:3,
        name:'Unagi',
        age:30,
    }
]
function block(objects){
        for (const object of objects) {
            document.write(`<div>${object.id} ${object.name} ${object.age}</div>`)
    }
    }
block(objects)

// - створити функцію яка повертає найменьше число з масиву
let n=[-2,-70,0,10,100]
function numbers(n){
let min = n[3];
    for (const item of n) {
if (item <min)
    min = item
    }
    return min;
}
console.log(numbers(n))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let m=[1,2,10]
function sum (m){
    let play = 0;
        for (const item of m) {
                   play+=item;
    }
return play
}

console.log(sum(m));