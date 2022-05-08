// ----- Map - это коллекция ключ/значение, но отличается от объекта тем, что позволяет хранить ключ любого типа

const newMap = new Map();

newMap.set('1','StringKey')
newMap.set(1,'NumberKey')
newMap.set(true,'BoolKey');

// newMap.delete(1);
// newMap.clear();

// console.log(newMap);
// console.log(newMap.has('1'), newMap.has(1), newMap.has(true));
// console.log(newMap.get('1'), newMap.get(1), newMap.get(true));
// console.log(newMap.size);

// --- Map может использовать объекты в качевстве ключа

const person = {
    name: 'Nikita'
}

const person2 = {...person};

const namesMap = new Map();

namesMap.set(person2, 100);

// console.log(namesMap.get(person2));


// --- Использование объектов в качестве ключей – это одна из известных и часто применяемых возможностей объекта Map
// --- Обычный объект не подойдет для таких задач, поскольку он приводит ключи к строке

/*
    Для сравнения ключей, объект Map использует алгоритм SameValueZero.
    Это почти такое же сравнение, что и ===, с той лишь разницей, что NaN считается равным NaN.
    Так что NaN также может использоваться в качестве ключа.
 */

// Каждый вызов Map.set() возвращает объект map, что позволяет нам использовать цепочку вызовов

const exam = new Map();

exam.set(1, '1')
    .set(2, '2')
    .set('1', 1)
    .set('2', 2);

// console.log(exam);


// --- Перебор Map

const newMap2 = new Map();

newMap2.set(1, '!!!')
    .set(2, 'Test')
    .set(3, 11)
    .set('4', 2)
    .set(NaN, 'NaN - value');

// keys, values, entries - возвращают иттерируемые объекты (Это объекты, которотые можно перебрать через for ... of)

// map.keys() - по аналогии с объектом возвращает ключи
for (const key of newMap2.keys()) {
    // console.log(key); // 1, 2, 3, '4', NaN
}

// map.values() - возвращает значения коллекции
for (const value of newMap2.values()) {
    // console.log(value); // '!!!', 'Test', 11, 2, 'NaN - value'
}

// map.entries() - возвращает связку [key, value], [key, value] ...
for (const entry of newMap2.entries()) {
    // console.log(entry); // [key, value], [key, value] ...
}

// --- Map имеет встроенный forEach

newMap2.forEach((value, key) => {
    // console.log(value, key);
})

// -- При создан Map мы можем передать в него масисив(или другой итерируемый объект) с парами ключ-значение для инициализации

let initMap = new Map([
    ['1',  'strVal'],
    [1,    'numVal'],
    [true, 'boolVal']
]);

// console.log(initMap.get('1')); // strVal

// Создать Map из объекта

// Это позволяет нам создать Map из объекта

const personObj = {
    name: 'Nikita',
    age: 21
};

const personMap = new Map(Object.entries(personObj));

// console.log(personMap);

// Так мы можем создать объект из Map

const objFromMap = Object.fromEntries(initMap /* Можно не писать entries() */);

// console.log(objFromMap, objFromMap['1'], objFromMap.true);

// -------------------

// --- Set - это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз

// При создании Set в него можно передать массив - это будет значение при инициализации
const newSet = new Set();

// Добавить значение (возвращает объект Set)
newSet.add('Value1');
newSet.add('Value1');
newSet.add('Value2');
newSet.add('Value3');

// Удалить значение (возвращет true или false)
// newSet.delete('Value1');

// Проверить присутствие значения в коллекции
// console.log(newSet.has('Value7'));

// Получить кол-во всех элементов коллекции
// console.log(newSet.size);

// Очистить коллекцию
// newSet.clear();

// console.log(newSet);

/*
    Основная фишка Set - при вызове add со значением, которое уже есть в коллекции ничего не произойдет, за счет этого
    и получается, что все значения в нашей коллекции уникальны
*/

let visitorsSet = new Set();

let john = { name: "John" };
let john2 = {...john};
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем посетителей, некоторые приходят несколько раз
visitorsSet.add(john);
visitorsSet.add(pete);
visitorsSet.add(mary);
visitorsSet.add(john2);
visitorsSet.add(mary);

// set хранит только 3 уникальных значения
// console.log(visitorsSet.size); // 3

// console.log(visitorsSet)

for (let user of visitorsSet) {
    // console.log(user); // John (потом Pete и Mary)
}

/*
    Альтернативным решением будет массив с использованием find, но это окажет влияние на производительность, поскольку
    find будет перебирать весть массив для поиска элемента. Множество Set лучше оптимизировано для добавлений,
    оно автоматически проверяет на уникальность.
*/

// --- Перебор Set

// Для перебора мы можем использовать как for...of так и forEach

let valuesSet = new Set(["Value_1", "Value_2", "Value_3"]);

for (const value of valuesSet) /* console.log(value) */;

valuesSet.forEach((value, valueAgain, set) => {
    // console.log(value, valueAgain, set)
})

// valueAgain - это value, это нужно для совместимости с forEach у Map. Позволяет легко заменить Set на Map и наоборот

// --- Set имеет теже встроенные методы что и Map

// Возвращает значения
// console.log(valuesSet.values());

// То же, что и values(), для совместимости с Map
// console.log(valuesSet.keys());

// Объект типа [value1, value1], для совместимости с Map
// console.log(valuesSet.entries());


// ---- ИТОГ -----

/*
    Map - "прокачанная" версия объекта, позволяет использовать в роли ключа значения разных типов благодаря алгоритму
    сравнения ключей SameValueZero. Имеет удобные методы для взаимодейстия.
*/

/*
    Set - "прокачанная" версия массива, позволяет сохранять только уникальные значения, более производительная чем связка
    массив + find. Имеет удобные методы для взаимодейстия.
*/

// !!! Перебор Map и Set всегда происходит в порядке ДОБАВЛЕНИЯ элементов. Нельзя получить элемент напрямую по его номеру
