import http from "../api";

const getAll = () => {
    return http.get("/mapbox");
};

export default {
    getAll,
};