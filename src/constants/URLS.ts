export const BASE_URL = import.meta.env.DEV ? 'http://localhost:4000/api/v1' : "https://codingdojo-final-backend.onrender.com";
console.log({ BASE_URL })
export const URLS = Object.freeze({
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    register: `${BASE_URL}/user/`,
    getAllMoviesExcept: `${BASE_URL}/movie/except`,
    addComment: `${BASE_URL}/movie/comment`,
    updateMovie: `${BASE_URL}/movie`,
    createMovie: `${BASE_URL}/movie`,
    deleteMovie: `${BASE_URL}/movie`
});
