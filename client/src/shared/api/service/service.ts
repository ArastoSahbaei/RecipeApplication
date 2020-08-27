import http from "../api";

const getAllRecipes = () => {
    return http.get("/notes");
};

export default {
    getAllRecipes,
};