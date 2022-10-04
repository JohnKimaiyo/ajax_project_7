const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router');

const hostname = '127.0.0.1';
const port = 3001;

// configure bodyparser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlEncodedParser);

// consfigure cors
app.use(cors());

// configure cors
app.use('/api', router)
// get
app.get('/', (request, response) => {
    response.send(`<h2>Welcome to express server of employee portal <h2` >);
});

app.listen(port, hostname, () => {
    console.log(`express server is statred at http://${hostname} : ${port}`);
});