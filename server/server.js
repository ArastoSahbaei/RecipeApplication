const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const middlewares = require('./app/middleware/middleware');
const dbConfig = require('./config/database.config.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbConfig.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": "brfSverige Application" });
});

require('./app/routes/BRF.routes.js')(app);
require('./app/routes/Users.routes.js')(app);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});