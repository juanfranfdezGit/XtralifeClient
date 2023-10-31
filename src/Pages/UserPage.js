import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function UserPage() {
    
    // Importa la función 'useNavigate' de React Router
    const navigate = useNavigate();

    // Navega a la pagina edit
    function editPage() {
        navigate('/edit');
    }

    // Navega a la pagina delete
    function deletePage() {
        navigate('/delete');
    }

    // Estado y funcion para manejar el usuario
    const [user, setUser] = useState([]);

    // Recoge datos de nuestra base de datos
    const getUser = async () => {
        const data = await axios.get('http://localhost:3001/userPage')

        setUser(data.data);
        console.log(data.data)
    }

    // Ejecuta la funcion una vez montado nuestro componente
    useEffect(() => getUser, []);

    return (
        <div>
            
            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza un campo de datos con los datos del usuario que haya logueado */}
            {
            user.map((user) => (
                <div className="userPanel">
                    <h1 className="userTitle">Bienvenido! {user.name}</h1>
                    <div className="userDatas">
                        <h2 className="userD">Datos de Socio</h2>
                        <p>Email: {user.email}</p>
                        <p>Nombre: {user.name}</p>
                        <p>Apellidos: {user.lastName}</p>
                        <p>Dni: {user.dni}</p>
                        <p>Dirección: {user.address}</p>
                    </div>
                    <div className="loginActions userPageActs">
                        <button className="submit" onClick={editPage}>Editar</button>
                        <button className="delete" onClick={deletePage}>Eliminar</button>
                    </div>
                </div>
            ))
            }
        </div>
    )
}