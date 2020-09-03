module.exports = (app) => {
    const recipeController = require('../controllers/Recipe.controller.js');
    app.post('/recipe', recipeController.create);
    app.get('/recipe', recipeController.findAll);
    app.get('/recipe/:recipeId', recipeController.findOne);
    app.put('/recipe/:recipeId', recipeController.update);
    app.delete('/recipe/:recipeId', recipeController.delete);
}