const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const middlewares = require('./middleware');
const dbConfig = require('./config/database.config.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "brfSverige Application" });
});

require('./app/routes/note.routes.js')(app);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});