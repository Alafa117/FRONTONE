const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación
        navigate('/code-entry');
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Iniciar Sesión</h2>
                <input
                    type="text"
                    placeholder="Usuario"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <div className="button-group">
                    <button type="button" onClick={() => navigate('/')}>
                        Volver al Inicio
                    </button>
                    <button type="submit">
                        Ingresar
                    </button>
                </div>
                <p>
                    ¿No tienes cuenta?
                    <span onClick={() => navigate('/signup')} className="link">
                        Regístrate
                    </span>
                </p>
            </form>
        </div>
    );
};