// export const BASE_URL = 'http://localhost:4000/api/v1'
export const BASE_URL = "https://codingdojo-final-backend.onrender.com/"
export const URLS = Object.freeze({
    login: `${BASE_URL}/auth/login`,
    logout: `${BASE_URL}/auth/logout`,
    register: `${BASE_URL}/user/`,
    findTaskExcept: `${BASE_URL}/task/except`,
    addTask: `${BASE_URL}/task`,
    editTask: `${BASE_URL}/task`
})