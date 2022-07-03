const btb = document.querySelector('#load-btn');

btb.addEventListener('click', () => {
    const eventSource = new EventSource('http://localhost:8080/sse');

    const updateTemplate = (data) => {
        console.log(JSON.parse(data.data))
        const content = document.querySelector('.content');

        // const div = document.createElement();

        const parsed = JSON.parse(data.data);

        let contentD = '';

        parsed.forEach((message) => {
             contentD += `<p>User: ${message.user} ::: Message: ${message.message}</p>`;
        });

        console.log(contentD)

        content.innerHTML = contentD;
        // content.innerHTML = `Id: ${data.lastEventId}, Data: ${data.data}`;
    };

    eventSource.addEventListener('message', (data) => {
         updateTemplate(data.data);
    });

    eventSource.addEventListener('load-messages', (data) => {
        updateTemplate(data);
    });

    eventSource.addEventListener('end-of-stream', () => {
        console.log('end-of-stream')
        eventSource.close();
    });
});
