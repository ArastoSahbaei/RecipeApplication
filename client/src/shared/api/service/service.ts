import http from "../api";

const getAllRecipes = () => {
    return http.get("/recipe");
};

const getRecipeById = (id: any) => {
    return http.get(`/recipe/${id}`);
};

export default {
    getAllRecipes,
    getRecipeById
};