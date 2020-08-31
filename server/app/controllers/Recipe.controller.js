const recipeModel = require('../models/Recipe.model.js');

exports.create = (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "Recipe title is required"
        });
    }

    const recipe = new recipeModel({
        title: req.body.title || "untitled recipe",
        duration: req.body.duration,
        ingrediens: req.body.ingrediens,
        description: req.body.description,
        originCountry: req.body.originCountry,
        language: req.body.language,
        views: req.body.views
    });

    recipe.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the data."
            });
        });
};

exports.findAll = (req, res) => {
    recipeModel.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving data."
            });
        });
};

exports.findOne = (req, res) => {
    recipeModel.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving Recipe with id " + req.params.noteId
            });
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Recipe content can not be empty"
        });
    }

    recipeModel.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Recipe",
        content: req.body.content
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating Recipe with id " + req.params.noteId
            });
        });
};

exports.delete = (req, res) => {
    recipeModel.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Recipe deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Recipe not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete Recipe with id " + req.params.noteId
            });
        });
};