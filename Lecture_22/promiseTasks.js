/*
    1. Напишите промис, который будет возвращать строку
*/

const first = new Promise((resolve) => resolve('Ok!'));

// first.then((result) => console.log(result));

/*
    2. Напишите промис, который будет возвращать ошибку с ее описанием
*/

// const second = new Promise((_, reject) => reject('Error'));

// second.then(
//     (data) => console.log(data),
//     (error) => {
//         console.log(error);
//         return 'Лог 124532.txt';
//     }
// ).then((data) => console.log('Проверка!Файла: ' + data));

/*
    3. Напишите промис, который должен подождать 1 сек. после чего вернуть число
*/

const third = new Promise(resolve => {
    setTimeout(() => {
        resolve(12);
    }, 1000);
});

const asyncThirdFunc = async () => {
    const data = await third;

    console.log(data);
};

// asyncThirdFunc();

/*
    4. Что выведет функция?
*/
// let promise = new Promise(function(resolve) {
//     resolve(1);
//
//     setTimeout(() => resolve(2), 1000);
// });
//
// promise.then((data) => console.log(data));

/*
  Что мы увидив в консоли?
*/

// let a = 5;
//
// setTimeout(function timeout() {
//     console.log(a); // 6
//     a = 10;
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log(a); // 1
//     a = 25; // 2
//     resolve(); // 3
// });
//
// p.then(function(){
//     console.log('Then done!'); // 5
// });
//
// console.log(a); // 4

// 5, promise, setTimeout

// 5, 25, text, 25


/*
    Запрос к API
*/

const main = document.querySelector('.main');

console.log('sdf')
const addTodo = (id, title) => {
    const divWrapper = document.createElement('div');

    divWrapper.style.display = 'flex';

    const h3 = document.createElement('h3');
    h3.innerText = id + '.';

    const p = document.createElement('p');
    p.innerText = title;

    divWrapper.append(h3, p);

    main.append(divWrapper);
}

// fetch('https://jsonplaceholder.typicode.com/todos?limit=5')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach((todo) => {
//             addTodo(todo.id, todo.title);
//         })
//     });

const getAsyncData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();

    data.forEach((todo) => {
        addTodo(todo.id, todo.title);
    });
}

getAsyncData()
