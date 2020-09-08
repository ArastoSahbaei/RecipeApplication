module.exports = (app) => {
    const userController = require('../controllers/Users.controller.js');
    app.post('/user', userController.create);
    app.post('/user/login', userController.login)
    app.get('/user', userController.findAll)

    app.get('/:userId/recipe', userController.getUserRecipes)
    app.post('/:userId/recipe', userController.newUserRecipe)

    app.post('/user/login', function checkAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        return false;
    }, userController.login)

    app.post('/user/register', userController.registerNewUser)
    app.post('/user/login', userController.login)
    app.get('/user/logout', (res, req) => { res.send("logging out") })
    app.post('/hahaha', (req, res, next) => { userController.registerini })
}