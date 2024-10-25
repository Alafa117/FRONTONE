export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

// Gestión del usuario
export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
    localStorage.removeItem('user');
};

// Verificar si el usuario está autenticado
export const isAuthenticated = () => {
    return getToken() !== null;
};

// Verificar si el usuario es administrador
export const isAdmin = () => {
    const user = getUser();
    return user?.role === 'admin';
};

// Limpiar toda la información de sesión
export const clearAuth = () => {
    removeToken();
    removeUser();
};