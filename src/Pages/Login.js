import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Login() {

    // Importa la función 'useNavigate' de React Router
    const navigate = useNavigate();

    // Estados y funciones para gestionar los datos.
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [status, setStatus] = useState('none');
   
    // Comrpueba que el usuario y la contraseña existan en el servidor
    function handleSubmit(event) {
        event.preventDefault();

        axios.post('/login', {email, password})
        .then(res => setStatus(res.data))
        .catch(err => console.log(err))
    }

    // Ejecuta la funcion cuando el estado de status sea correcto y entonces navegamos a nuestra pagina de usuario
    useEffect(() => {
        if (status === "Success") {
            userPage();
        }
    }, [status])

    // Navega a la pagina registro
    function registro() {
        navigate('/signup');
    }

    // Navega a la pagina de usuario
    function userPage() {
        navigate('/userPage');
    }

    return (
        <div>

            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza un formulario para el inicio de sesion */}
            <div className="form">
                <h1>Inicia Sesión!</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" onChange={e => setEmail(e.target.value)}/>
                    
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/>

                    <div className="loginActions">
                        <button type="submit" className="submit">Entrar</button>
                        <button className="submit" onClick={registro}>Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}