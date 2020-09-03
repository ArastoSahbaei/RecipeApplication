const UserModel = require('../models/Users.model.js');
const RecipeModel = require('../models/Recipe.model')
const bcrypt = require('bcrypt')

exports.create = async (req, res) => {
    if (!req.body.username) {
        return res.status(400).send({
            message: "User must contain data"
        });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new UserModel({
        username: req.body.username,
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

exports.findAll = (req, res) => {
    UserModel.find()
        .then(notes => {
            res.send(notes);
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

exports.login = async (req, res) => {
    const users = [
        {
            "username": "aeeeto",
            "password": "parrword"
        }
    ]
    const user = users.find(user => user.username === req.body.username)
    if (user === null) {
        return res.status(400).send('Cannot find User')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.status(500).send("Success")
        } else {
            res.send("Not Allowed")
        }
    } catch {
        res.status(500).send()
    }

}
