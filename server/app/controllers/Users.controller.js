const UserModel = require('../models/Users.model.js')
const RecipeModel = require('../models/Recipe.model')

exports.findAll = async (req, res, next) => {
    await UserModel.find()
        .then(response => { res.send(response) })
        .catch(err => {
            res.status(500).send({ message: err.message || "Some error occurred while retrieving User." });
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