const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const middlewares = require('./app/middleware/middleware');
const dbConfig = require('./config/database.config.js');
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const app = express();
require('./config/passport-config');
require('dotenv').config();

app.use(cors({ credentials: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser("process.env.SESSION_SECRET"))
app.use(passport.initialize())
/* app.use(passport.session()) */
/* require('./config/passport-config')(passport) */

mongoose.connect(dbConfig.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./app/routes/Recipe.routes.js')(app);
require('./app/routes/Users.routes.js')(app);
require('./app/routes/registerUser.js')(app)
require('./app/routes/loginUser.js')(app)
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});