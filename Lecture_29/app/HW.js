let elementId = 1;

class ShoppingList {
    list = [];

    constructor(title, author, maxListLength) {
        this.title = title;
        this.author = author;
        this.maxListLength = maxListLength;
    };

    addItem(title, count, unit) {
        if (this.list.length >= this.maxListLength) {
            throw new Error(`Список уже полон, ${title} уже не унести...`);
        }

        if (title === undefined || title === '') {
            throw new Error(`Вы не заполнили поле title...`);
        }

        if (count === undefined || count === '') {
            throw new Error(`Вы не заполнили поле count у ${title}...`);
        }

        if (unit === undefined || unit === '') {
            throw new Error(`Вы не заполнили поле unit у ${title}...`);
        }

        this.list.push(new ShoppingListElement(title, count, unit));
        elementId++;
    };

    removeItem(id) {
        if (!this.list.find((elem) => elem.id === +id)) {
            throw new Error(`Нет элемента с id №${id}...`);
        }

        this.list = this.list.filter((elem) => elem.id !== +id);
    };
}

class ShoppingListElement {
    constructor(title, count, unit) {
        this.id = elementId;
        this.title = title;
        this.count = count;
        this.unit = unit;
    };
}

const shoppingListObject = new ShoppingList('Покупки', 'Никита Мирошниченко', '4');

(() => {
    try {
        shoppingListObject.addItem('', '3', 'пачках');
    } catch (ex) {
        console.log(ex)
    }

    try {
        shoppingListObject.addItem('Кефир', '3', 'л');
    } catch (ex) {
        console.log(ex)
    }

    try {
        shoppingListObject.addItem('Колбаса', '', 'палка');
    } catch (ex) {
        console.log(ex)
    }

    try {
        shoppingListObject.removeItem('7');
    } catch (ex) {
        console.log(ex)
    }

    try {
        shoppingListObject.addItem('яблоко', '', 'шт');
    } catch (ex) {
        console.log(ex)
    } finally {
        console.log(shoppingListObject.list);
    }
})();
