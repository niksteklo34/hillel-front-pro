/*
    Promise - обертка над значением, которое мы не знаем на момент объявление промиса.
    Промис позволяет обрабатывать асинхронный код как синхронный, он возвращает обещание вернуь данные в неком будущем.
*/

/*
    Promise имеет принимает аргументом функцию с 2 параментрами resolve и reject (являются предопределенными,
    так же являются колбеками).

    resole - при вызове сигнализирует промису, что выполнение окончено и возвращает данные.
    reject - при вызове отклоняет выполнение промиса и возвращает причину (ошибку)
*/

// const firstPromise = new Promise((resolve, reject) => {
//     const a = 200;
//
//     if (a > 100) {
//         reject('Error message');
//     } else {
//         resolve('Done');
//     }
// });
//
// firstPromise
//     .catch((error) => console.log(error))
//     .catch((error) => console.log(error));

/*
     У промиса есть 3 состояния:
        1. ожидание (pending): начальное состояние, не исполнен и не отклонён (при создании промиса).
        2. исполнено (fulfilled): операция завершена успешно (при resolve).
        3. отклонено (rejected): операция завершена с ошибкой (при reject).
*/

/*
    Обработчики

    У промиса есть 3 обработчика:
        1. then - обрабатывает resole (может обработать и reject) - можно вызываеть несколько штук друг за другом
        2. catch - обрабатывает reject
        3. finally - отрабатывает независимо от результата выполнения промиса
*/

// const secondPromise = new Promise((resolve, reject) => {
//     const successLoad = true;
//
//     if (successLoad) {
//         resolve('Done');
//     } else {
//         reject('Error');
//     }
// });
//
// secondPromise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Finally'));

// const rejectPromise = new Promise((_, reject) => reject('Error!'));

// const reject = new Promise((_, reject) => reject('Error'));

// reject.catch((error) => console.log(error));

// reject.then((successData) => console.log(successData));

// let isLoading = true;

// console.log(isLoading)

// reject.finally(() => {
//     isLoading = false;
//
//     console.log('Finally')
// });

// console.log(isLoading)

// rejectPromise.then((data) => console.log(data), (error) => console.log(error));

// Если один обработчик ошибки ее отловил - дальше она не пойдет
// rejectPromise.catch((error) => console.log(error));

/*
    Promise имеет и альтернативный синтаксис (не через функцию конструктор), общазение через ключевое слово Promise
*/

// Promise.resolve('data').then((data) => console.log(data));
// Promise.reject('error').catch((error) => console.log(error));

/*
    У данного синтаксиса есть несколько методов:

    Promise.all(iterable)
        Ожидает исполнения всех промисов или отклонения любого из них.
        Возвращает промис, который исполнится после исполнения всех промисов в iterable. В случае, если любой из промисов будет отклонён, Promise.all будет также отклонён.

    Promise.allSettled(iterable)
        Ожидает завершения всех полученных промисов (как исполнения так и отклонения).
        Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), содержащий массив результатов исполнения полученных промисов.

    Promise.race(iterable)
        Ожидает исполнения или отклонения любого из полученных промисов.
        Возвращает промис, который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из .iterable.
*/

/*
    Пример множества then
*/

// Promise.resolve('WOW!')
//     .then((data) => {
//         console.log('Старт записи!')
//         return data;
//     })
//     .then((data) => {
//         console.log('Данные: ' + data);
//     })
//     .finally(() => {
//         console.log('Запись окончена!');
//     });

/*
    Пример множества catch (не работает)
*/

// Promise.reject('Error')
//     .catch((error) => console.log(error))
//     .catch(() => console.log('Error!'))
//     .catch(() => console.log('Error!'))
//     .catch(() => console.log('Error!'))

/*
    Асинхронность в Promise

    Код, который написан внутри Promise вполне себе синхронный, единственное что асинхронно так это setTimeout, например.
    Для промисов и таймаутов в event loop предусмотрены 2 отдельные очереди, и очередь колбэков промисов исполняется перед очередью таймаутов.
*/

// const asyncPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('End!');
//     }, 3000);
// });

// console.log(asyncPromise);

// asyncPromise.then((data) => console.log(data));
// asyncPromise.finally(() => console.log('Finally done!'));

/*
    async/await
*/

/*
    Позволяет не переходить к следующей строчке, пока не выполнится await
*/

/*
    Для обработки ошибок (альтернатива catch) используется try ... catch и finally
*/

/*
    Есть возможность вызывать await по цепочке
*/

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

// delay(4000).then(() => {
//     console.log('Наконец-то')
// });

// const asyncPromise = async () => {
//     try {
//         console.log('Start');
//
//         await delay(2000);
//
//         const response = await new Promise((resolve) => {
//             setTimeout(() => resolve('HELLO!'), 1000);
//         })
//
//         console.log('Result: ' + response);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Finally!')
//     }
//
// };
//
// asyncPromise(); // Возвращает промис

// function test() {
//     const a = await delay(100);
// }
//
// const test1 = async function() {
//
// }

const returnData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Данные переданы!')
        }, 4000);
    });
}

// const getAsyncData = async () => {
//     try {
//         throw 'Ужас, все пропало...';
//
//         const data = await returnData();
//
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Все равно покажусь!');
//     }
// };
//
// console.log(getAsyncData());

/*
    Под капотом все оборачивается в промисы и выглядит все как в примере выше, это сделано для простоты понимания кода
    разработчиками - синтаксический сахар.
*/
