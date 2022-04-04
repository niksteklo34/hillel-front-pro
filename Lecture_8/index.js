// ----------- Тернарный оператор -------------

/*
    Существует несколько типов операторов:
    1. Унарный - работает с ОДНИМ значением (-, ++, -- ...)
    2. Бинарный - работает с ДВУМЯ значениями (почти все математические вычесления, =, +, -, /, * ...)
    3. Тернарный - работает с ТРЕМЯ значениями ( (условие) ?(if) если условие true :(else) если условие false )

    Сравнение тернарного оператора с if:

    Тернарный оператор:
        - Возвращает результа:Жqqт
        - Занимает меньше места
        - Можно использовать в рамках выражения
    if:
        - Не возвращает результат
        - Нужно писать отдельную конструкцию
        - Необходимое выражение нужно писать внутри блока
 */

const value = 4 > 5 ? 10 : 5;


// Пример приоритета тернарного оператора
const a = 10 + 10 + 10 > 20 ? 1 : 0;

const b = 10 + 10 + (10 > 15 ? 1 : 0);

// Привер использования в строках
const c = false;
const d = `Привет ${(c) ? 'мир' : 'не мир'}`;

// Реализация альтернативы ELSE IF
const e = 10
const f = (2 > e) ? 'e меньше 2' : ((e > 2) ? 'e больше 2' : 'e меньше 2');

/*
    Не рекомендую  использовать такой подход, поскольку его трудно читать и если код розрастется
    вообще будет очень трудно понять что тут вообще происходит. Для вложенных условий лучше использовать ELSE IF
*/

// ----------- Циклы -------------

/*
    Циклы нужны для многократного повторения одного и того же участка кода
 */

// ----- WHILE -------

let g = 0

while (g < 5) {
    // console.log(g);
    g++;
}

/*
    Цикл WHILE проверяет условие ПЕРЕД выполнение тела цикла!
    Тело цикла будет выполняться пока условие (j < 5) будет true.
    Если мы не добавим инкремент j тогда мы получим вечный цикл который может положить наш комп.
*/

// Пример того, что условие приведится к булевому значению
let h = 0;

while (h) {
    // console.log(h);
    h++;
}

// Если тело цикла состоит из 1 строки мы можем опустить фигурные скобки
let i = 5;

// while (i) console.log(i--);

// ----- DO WHILE -------

/*
    Цикл DO WHILE проверяет условие ПОСЛЕ выполнение тела цикла, это является главным отличием
    Простыми словами: первая итерация всегда выполнится не зависимо от условия

    Отличается синтаксисом написания
 */

// let j = 0;

// let func = () => {
//     return 6;
// }
//
// do {
//     console.log('sdf')
//     // j--;
// } while (func());

// ----- FOR -------

/*
    Цикл FOR проверяет условие ПЕРЕД выполнение тела цикла!
    FOR является более сложным, но более удобным циклом поскольку дает возможность объявить
    переменную-счетчик (встроенное объявление) внутри своего тела
    Так же FOR позволяет прописать шаг цикла внутри своего тела
 */

for (let k = 0 /* НАЧАЛО */; k < 5 /* УСЛОВИЕ */; k++ /* ШАГ */) {
    // console.log(k)
}

// Иниц. счетчика -> (проверка условия -> тело цикла -> шаг цикла) -> ...

// Любую часть из круглых скобок можно пропустить и цикл будет работать
let l = 0;

for (; l < 5; l++) {
    // console.log(l)
}

// ------- BREAK -------

/*
    Директива позволяет полностью прекратить выполнение цикла досрочно (выйти из цикла)
*/

for (let m = 0; m < 5; m++) {
    if (m === 3) break;

    // console.log(m);
}

// ----- CONTINUE ------

/*
    Директива позволяет прервать выполнение тела цткда и перейти на следующую итерацию
*/

for (let n = 0; n < 10; n++) {
    if (n % 2) continue;

    // console.log(n);
}

// !!!! Директивы BREAK и CONTINUE нельзя использовать с тернарным оператором !!!!

// ----- Метки цикла -----

/*
    При вложенных циклах позволяет присваивать циклам определенные названия по которым мы могли бы их прерывать,
    или останавливать
*/

parentFor: for (let o = 0; o < 2; o++) {
    for (let p = 0; p < 3; p++) {
        if (p === 2) {
            continue parentFor;
        }
        // console.log(p);
    }
}


// ------------ Методы перебора массива ---------------

/*
    Существует много методов перебора массива: forEach, filter, find, findIndex, every/some, map, reduce
    И нам нужно разобраться какой метод для чего мы используем
*/

// Перебирать массив можно обычным циклом FOR, так же можно перебирать с помощью FOR OF

// const arr = ['один', 'два', 'три'];

// Перебор через for
// for (let index = 0; index < arr.length; index++) {
//     // console.log(arr[index])
// }

// Перебор через for of
// for (let value of arr) {
//     console.log(value)
// }

/*
    forEach - функция, которая вызывается для каждого элемента массива. Ничего не возвращает.
    Является более простой формой записи FOR, имеет дополнительные параметры (index, array)

    Позволяет выполнить какую-то функцию для каждого из элементов массива
    Не меняет исходный массив
*/

// const consoleLog = (arg) => console.log(arg);

// arr.forEach((ggg) => {})

/*
    map - работает как forEach, но возвращает новый массив. Позволяет трансформировать элементы перебираемого массива.
    Нужен для преобразования перебираемого массива в новый массив.
    Не меняет исходный массив
*/

// const newArr = arr.map((value, index) => {
//     if (index === 1) {
//         return value + ' GGG ' + (index + 10);
//     }
// })

// console.log(newArr);

/*
    filter - работает как forEach. Возвращает новый массив, элементы которого удовлетворяют условию
    Не меняет исходный массив
*/

// const newArr = arr.filter((value) => value === 'один')
//
// console.log(newArr)

/*
    reduce - работает как forEach. Позволяет вернуть финальное свойство, значение, массив и тд. на
    основе всех элементов перебираемого массива.
    Не меняет исходный массив
*/

const users = [
    {
        name: 'Nikita',
        salary: 500
    },
    {
        name: 'Nikita',
        salary: 1000
    },
    {
        name: 'Nikita',
        salary: 500
    },
    {
        name: 'Nikita',
        salary: 900
    },
];

const totalSalary = users.reduce((sumSalary, user) => {
    return sumSalary + user.salary;
}, 0);

// console.log(totalSalary);

/*
    find - работает как forEach. Позволяет найти по условию нужный элемент массива (возвращает первое совпадение по условию)

    Если массив простой то можно воспользоваться методом includes()
*/

// const find = arr.find((value) => value === 'два');
//
// console.log(find);

/*
    findIndex - работает как find. В отличии от find этот метод возвращает идентивикатор первого совпадения в массиве
*/

// const arr = ['один', 'два', 'три'];
//
// const findId = arr.findIndex((value) => value === 'два');
//
// console.log(arr[findId]);

// const newArr = users
//     .filter((user) => user.salary > 500)
//     .map((user) => `${user.name}. ${user.salary}`);
//
// const newArr2 = users.filter((user) => user.salary > 500);
// const newArr3 = newArr2.map((user) => `${user.name}. ${user.salary}`);
//
// console.log(newArr);

// Методы можно использовать цепочкой (чейн)


// --------- Перебор объекта ----------

/*
    Для перебора всех свойств объекта используется цикл FOR IN - перебирает свойства объекта
*/

/*
    Object.keys - возвращает массив ключей объекта, Object.values - возвращает массив значений свойств массива.
    Object.entries - возвращает массив пак ключ - значение массива
 */

const object1 = {
    a: 'somestring',
    b: 42
};

// console.log(Object.keys(object1))
// console.log(Object.values(object1))
// console.log(Object.entries(object1))

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }


//