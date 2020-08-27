import http from "../api";

const getAllRecipes = () => {
    return http.get("/mapbox");
};

export default {
    getAll: getAllRecipes,
};