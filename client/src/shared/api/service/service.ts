import http from "../api";

const getAllRecipes = () => {
    return http.get("/recipe");
};

export default {
    getAllRecipes,
};