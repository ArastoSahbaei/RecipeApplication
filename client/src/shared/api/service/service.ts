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

const createRecipeByUserId = (userId: string, newRecipe: object) => {
    return http.post(`/${userId}/recipe`, newRecipe);
};

const updateRecipe = (id: any, updatedRecipe: object) => {
    return http.put(`/recipe/${id}`, updatedRecipe);
};

const searchService = (debounced: any, search?: any) => {
    return http.get(`/recipe`)
}

export default {
    getAllRecipes,
    getRecipeById,
    deleteRecipeById,
    createRecipeByUserId,
    updateRecipe,
    searchService
};