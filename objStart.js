const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
console.log(user.name);
delete user.name;
console.log(user.name)

//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
    let count = 0;
    for (const objKey in obj) {
        count++
    }
    return !count
}

//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (const salariesKey in salaries) {
    sum += salaries[salariesKey];
}

//Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] === 'number') {
            obj[objKey] *= 2;
        }

    }
}