const btb = document.querySelector('#load-btn');

btb.addEventListener('click', () => {
    const eventSource = new EventSource('http://localhost:3001/sse');

    const updateTemplate = (data) => {
        const body = document.querySelector('body');

        body.innerHTML += `<p>${data}</p>`;
        // content.innerHTML = `Id: ${data.lastEventId}, Data: ${data.data}`;
    };

    eventSource.addEventListener('message-event', (event) => {
        updateTemplate(event.data);
    });

    eventSource.addEventListener('end-of-connection', () => {
        eventSource.close();
    });

    // setTimeout(() => eventSource.close(), 5000);

    //
    // eventSource.addEventListener('load-messages', (data) => {
    //     updateTemplate(data);
    // });
    //
    // eventSource.addEventListener('end-of-stream', () => {
    //     console.log('end-of-stream')
    //     eventSource.close();
    // });


    const handler = () => {
        // Отправка формы

        fetch('http://localhost:3001/tasks', {
            method: "POST"
        })

        fetch('http://localhost:3001/tasks', {
            method: "GET"
        })

        fetch('http://localhost:3001/tasks', {
            method: "DELETE"
        })
    };

});
