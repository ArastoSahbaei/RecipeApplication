import http from "../api";

const getAllRecipes = () => {
    return http.get("/recipe");
};

const getRecipeById = (recipeId: any) => {
    return http.get(`/recipe/${recipeId}`);
};

const deleteRecipeById = (recipeId: any) => {
    return http.delete(`/recipe/${recipeId}`);
};

const createRecipe = (newRecipe: object) => {
    return http.post(`/recipe`, newRecipe);
};

const updateRecipe = (updatedRecipe: object) => {
    return http.put(`/recipe/${updatedRecipe}`);
};

export default {
    getAllRecipes,
    getRecipeById,
    deleteRecipeById,
    createRecipe,
    updateRecipe
};