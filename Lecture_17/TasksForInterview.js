/*
    1. Палиндром

    Дана строка; нужно написать функцию, которая позволяет вернуть значение true,
    если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
*/

// anna === anna,

function palindrome(word) {
    word = word.toLowerCase();
    const reverseWord = word.split('').reverse().join('').toLowerCase();

    return word === reverseWord;
}

// console.log(palindrome('Anna'))
// console.log(palindrome('Test'))

/*
    2. FizzBuzz

    Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
    которое функция принимает в качестве параметра, с такими условиями:

    вывод fizz вместо чисел, кратных 3;
    вывод buzz вместо чисел, кратных 5;
    ыввод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

function FizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

// FizzBuzz(60) // 1, 2, 'fizz', 4, 'buzz' , ... , 29, 'fizzbuzz' ...

/*
    3. Поиск гласных

    Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
    Гласными являются «a», «e», «i», «o», «u».
*/

function findVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return word.split('').filter((letter) => vowels.includes(letter)).length;

    // let counter = 0;
    //
    // word.split('').forEach((letter) => {
    //     if (vowels.includes(letter)) {
    //         counter++;
    //     }
    // })
    //
    // return counter;
}

// console.log(findVowels('Hello')); // 2
// console.log(findVowels('Hey')); // 1

/*
    4. Фибоначчи

    Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности,
    причем n — число, которое передается в качестве аргумента функции. [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
*/

function fibonacci(num) {
    if (num < 0) return 'Incorrect param';

    if (num === 0) return [0];

    const result = [0, 1];

    for (let i = 2; i <= num; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result[num];
}

function fibonacci2(num) {
    if (num < 2) {
        return num;
    }

    return fibonacci2(num - 2) + fibonacci2(num - 1);
}

// console.log(fibonacci(42));
// console.log(fibonacci2(42));

/*
    5. Уникализация значений в массиве.

    Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив,
    состоящий только из уникальных значений первого массива.
*/

function unique(array) {
    return Array.from(new Set(array));
}

function unique2(array) {
    const res = [];

    array.forEach((value) => {
        if (!res.includes(value)) {
            res.push(value);
        }
    });

    return res;
}

// console.log(unique([1, 1, 2, 2, 4, 2, 7, 1])); // => [1, 2, 4, 3, 7]
// console.log(unique2([1, 1, 2, 2, 4, 2, 7, 1])); // => [1, 2, 4, 3, 7]

/*
    6. Удвоение чисел

    Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
*/

function doubleNumbers(array) {
    return array
        .filter((value) => value === Number(value))
        .map((value) => value * 2);
}

// console.log(doubleNumbers([1, 2, null, 'Nikita', 7, 8, 11, 'test', 3, NaN])); // => [2, 4, 14, 16, 6]

// console.log(anagram('finder', 'Friend'));

/*
    7. Бомба

    Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время,
    через которое взорвется и некоторый «звук взрыва» (строку, которую вернет через заданное время).
 */

function Bomb(message, delay) {
    this.message = message;

    setTimeout(this.explosion.bind(this), delay);
}

Bomb.prototype.explosion = function () {
    console.log(this.message);
};

// new Bomb('Hello', 2000);


/*

    --- ДЗ ---

*/


/*
    1. Уникализация значений в массиве. (решить через filter)

    Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив,
    состоящий только из уникальных значений первого массива.
*/

/*
     2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
*/

// console.log((2).plus(3).minus(1));

/*
    3. Анаграмма

    Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
    Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/

function anagram(firstWord, secondWord) {

}

/*
    * 4. Напишите функцию, которая будет удалять повторяющиеся значения и возвращать получившийся массив.
    Значения в результирующем массиве должны быть отсортированны по кол-ву слов во входном массиве.
*/

const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];

function solution(words) {

}

// console.log(solution(words));

/*
    ** 5. Анаграмма

    Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
    Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/
