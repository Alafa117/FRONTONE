const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Aquí irá la lógica para obtener los datos de los usuarios
    }, []);

    return (
        <div className="admin-dashboard">
            <h2>Panel de Administración</h2>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cédula</th>
                        <th>Código</th>
                        <th>Premio</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.cedula}</td>
                            <td>{user.code}</td>
                            <td>{user.prize}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};