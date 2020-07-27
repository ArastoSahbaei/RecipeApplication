module.exports = (app) => {
    const brfController = require('../controllers/BRF.controller.js');
    app.post('/notes', brfController.create);
    app.get('/notes', brfController.findAll);
    app.get('/notes/:noteId', brfController.findOne);
    app.put('/notes/:noteId', brfController.update);
    app.delete('/notes/:noteId', brfController.delete);

}