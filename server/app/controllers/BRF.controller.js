const BRF = require('../models/BRF.model.js');

exports.create = (req, res) => {
    if (!req.body.brf) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    const brf = new BRF({
        brf: req.body.brf || "untitled brf",
        lghAntal: req.body.lghAntal,
        orgNr: req.body.orgNr,
        grundat: req.body.grundat,
        kommun: req.body.kommun,
    });

    brf.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

exports.findAll = (req, res) => {
    BRF.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};

exports.findOne = (req, res) => {
    BRF.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
};

exports.update = (req, res) => {
    if (!req.body.brf) {
        return res.status(400).send({
            message: "BRF content can not be empty"
        });
    }

    BRF.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "BRF not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "BRF not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating BRF with id " + req.params.noteId
            });
        });
};

exports.delete = (req, res) => {
    BRF.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
};