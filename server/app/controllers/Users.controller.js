const UserModel = require('../models/Users.model.js');

exports.create = (req, res) => {
    if (!req.body.username) {
        return res.status(400).send({
            message: "User must contain data"
        });
    }

    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        bio: req.body.bio,
        image: req.body.image,
        hash: req.body.hash,
        salt: req.body.salt
    });

    user.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        });
};
