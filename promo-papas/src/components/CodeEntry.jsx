const CodeEntry = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de verificación del código
        setResult({ status: 'success', message: '¡Felicidades! Has ganado $50.000' });
    };

    return (
        <div className="code-entry-container">
            <h2>Bienvenido, [Nombre Usuario]</h2>
            <form onSubmit={handleSubmit} className="code-form">
                <input
                    type="text"
                    placeholder="Ingresa tu código"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button type="submit">Verificar Código</button>
            </form>
            {result && (
                <div className={`result ${result.status}`}>
                    {result.message}
                </div>
            )}
            <button onClick={() => navigate('/')} className="back-button">
                Volver al Menú
            </button>
        </div>
    );
};