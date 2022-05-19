// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 2;
if (a !== 0) {
    console.log ('true')
} else {
    console.log ('false')
}

//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 16;
if ((time>=0) && (time<=15)) {
    console.log (1)
} else if ((time>=16) && (time<=30)){
    console.log (2)
}else if ((time>=31) && (time<=45)) {
    console.log(3)
}else if ((time>=46) && (time<=60)){
        console.log (4)}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 4;
if ((day>0) && (day<=10)){
    console.log ('I')
} else if ((day>10) && (day<=20)){
    console.log('II')
} else if ((day>20) && (day<=31)){
    console.log ('III')}
//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let w = +prompt('type from 1 to 7 to see your task')
switch (w) {
    case 1:
        console.log('English classes');
        break;
    case 2:
        console.log('dinner for family');
        break;
    case 3:
        console.log('visit a doctor');
        break;
    case 4:
        console.log('help with homework');
        break;
    case 5:
        console.log('clean a flat');
        break;
    case 6:
        console.log('IT classes');
        break;
    case 7:
        console.log('have a rest');
        break;
    default:
        console.log('??????????')
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
let x = 1
let y = 2

if (x<y) {
console.log(x)
} else if (y>x) {
    console.log(y)
} else if ( x===y) {
    console.log('=')
}


// let num =+prompt('1 or 2')
// if (num>=2){
//     console.log('max')
// } else if (num<2){
//     console.log ('min')
// }
// let numx =+prompt('1 or 2')
// if ((numx=1) && (numx=2)){
// //     console.log ('=')
// }
