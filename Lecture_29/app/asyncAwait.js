
const getAsyncData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
};


getAsyncData().then((data) => {
    console.log(data);
});

// Promise.resolve('dfgh').then()
