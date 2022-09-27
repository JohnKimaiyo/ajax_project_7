// text file data
let textButton = document.querrySelector('#text-btn');
textButton.addEventListener('click', function () {

    // create an ajax request
    let xhr = new XHLHttpRequest();

    // prepare the request
    xhr.open('GET', 'message.text', true);

    // send reequest the request
    xhr.send();

    // process the request
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayTextData(data);
        }
    }
});

// display textdata
let displayTextData = (data) => {
    let htmlTemplate = `<h3>{data}</h3>`;
    document.querrySelector('#text-card').innerHTML = htmlTemplate;
}