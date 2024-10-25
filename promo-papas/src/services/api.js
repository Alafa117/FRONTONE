import axios from 'axios';

const API_URL = '/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor para agregar el token a las peticiones
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Servicios de autenticación
export const authService = {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    adminLogin: (credentials) => api.post('/auth/admin/login', credentials)
};

// Servicios de códigos promocionales
export const promoService = {
    verifyCode: (code) => api.post('/promos/verify', { code }),
    getWinners: () => api.get('/promos/winners')
};

export default api;