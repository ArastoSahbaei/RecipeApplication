module.exports = (app) => {
    const recipeController = require('../controllers/Recipe.controller.js');
    app.post('/recipe', recipeController.create);
    app.get('/recipe', recipeController.findAll);
    app.get('/recipe/:noteId', recipeController.findOne);
    app.put('/recipe/:noteId', recipeController.update);
    app.delete('/recipe/:noteId', recipeController.delete);
}