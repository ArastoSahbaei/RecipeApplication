const UserModel = require('../models/Users.model.js')
const RecipeModel = require('../models/Recipe.model')
const bcrypt = require('bcrypt')
const passport = require('passport')

exports.create = async (req, res) => {
    if (!req.body.email) {
        return res.status(400).send({
            message: "User must contain data"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new UserModel({
        email: req.body.email,
        password: hashedPassword,
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

exports.findAll = async (req, res, next) => {
    await UserModel.find()
        .then(response => {
            res.send(response);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving User."
            });
        });
};

exports.getUserRecipes = async (req, res, next) => {
    const { userId } = req.params
    const user = await UserModel.findById(userId).populate('createdRecipes')
    res.status(200).json(user.createdRecipes)
}

exports.newUserRecipe = async (req, res, next) => {
    const { userId } = req.params
    const newRecipe = new RecipeModel(req.body)
    const user = await UserModel.findById(userId)
    newRecipe.createdByUser = user
    await newRecipe.save()
    user.createdRecipes.push(newRecipe)
    await user.save()
    res.status(201).json(newRecipe)
}

exports.login = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) {
            res.send("No User Exists");
        } else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.send("Successfully Authenticated");
                console.log(req.user);
            })
        }
    })(req, res, next)
}

exports.registerNewUser = async (req, res) => {
    if (!req.body.email) {
        return res.status(400).send({
            message: "User must contain data"
        });
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new UserModel({
            email: req.body.email,
            password: hashedPassword,
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
    } catch (error) {
        console.log(error)
    }

    exports.registerini = async (req, res) => {
        passport.authenticate('register', (err, user, info) => {
            if (err) {
                console.error(err);
            }
            if (info !== undefined) {
                console.error(info.message);
                res.status(403).send(info.message);
            } else {
                // eslint-disable-next-line no-unused-vars
                req.logIn(user, error => {
                    console.log(user);
                    const data = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        username: user.username,
                    };
                    console.log(data);
                    User.findOne({
                        where: {
                            username: data.username,
                        },
                    }).then(user => {
                        console.log(user);
                        user
                            .update({
                                first_name: data.first_name,
                                last_name: data.last_name,
                                email: data.email,
                            })
                            .then(() => {
                                console.log('user created in db');
                                res.status(200).send({ message: 'user created' });
                            });
                    });
                });
            }
        })(req, res, next);
    }
}