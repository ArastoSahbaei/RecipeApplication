module.exports = (app) => {
    const userController = require('../controllers/Users.controller.js');
    app.post('/user', userController.create);
    app.get('/user', userController.findAll)
    app.get('/:userId/recipe', userController.getUserRecipes)
    app.post('/:userId/recipe', userController.newUserRecipe)
}