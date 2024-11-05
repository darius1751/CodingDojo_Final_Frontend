// export const BASE_URL = 'http://localhost:4000/api/v1'
// export const BASE_URL = "https://codingdojo-final-backend.onrender.com/"
export const BASE_URL = import.meta.env.DEV ? 'http://localhost:4000/api/v1' : "https://codingdojo-final-backend.onrender.com/";
console.log({ BASE_URL })
export const URLS = Object.freeze({
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    register: `${BASE_URL}/user/`,
});
