import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function UserPage() {
    
    // Importa la función 'useNavigate' de React Router
    const navigate = useNavigate();

    // Elimina un usuario de nuestra base de datos y tras ello nos enlaza con la pagina Home
    function handleDelete() {
        axios.post('https://xtralife.onrender.com/delete')
        .then(navigate('https://xtralife.onrender.com/'))
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza un mensaje para asegurar que se quiere realizar el borrado de usuario y el boton para la accion */}
            <div className="userPanel">
                <h1>¿Seguro que desea eliminar esta cuenta?</h1>
                <div className="loginActions userPageActs">
                    <button className="delete" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}