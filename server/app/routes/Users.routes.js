module.exports = (app) => {
    const userController = require('../controllers/Users.controller.js');
    app.post('/user', userController.create);
}