import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import validation from "../Utils/SignupValidation";
import { useState } from "react";
import axios from "axios";

export default function Signup() {

        // Establece un estado inicial 'values' con propiedades para los campos del formulario.
        const [values,setValues] = useState({
            email: '',
            password: '',
            name: '',
            lastName: '',
            dni: '',
            address: '',
        })

        // Importa la función 'useNavigate' de React Router
        const navigate = useNavigate();

        // Establece un estado 'errors' para manejar los errores de validación.
        const [errors, setErrors] = useState({});

        // Función para manejar los cambios en el formulario.
        const handleInput = (event) => {
            setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
        }
        
        // Maneja el envío del formulario.
        const handleSubmitSign = (event) => {
        event.preventDefault();

         // Realiza una validacion de los datos antes de ser enviados.
        const err = validation(values);
        setErrors(err);

        // Si no hay errores en la validacion, envia los datos al servidor.
        if (err.email === "" && err.password === "" && err.name === "" && err.lastName === "" && err.dni === "" && err.address === "") {
        axios.post('https://xtralife.onrender.com/signup', values)
        .then(res => {
            // Navega a la pagina login una vez enviado los datos.
            navigate('https://xtralife.onrender.com/login');
        })
        .catch(err => console.log(err))
        }
    }
   
    return (
        <div>
            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza un formulario donde recogeremos los datos con los que registrar un usuario en nuestra base de datos */}
            <div className="form">
                <h1>Registrate!</h1>
                <form onSubmit={handleSubmitSign}>
                    <label>Email:</label>
                    <input type="text" name="email" id="email" onChange={handleInput}/>
                    {errors.email && <span className="error"> {errors.email} </span>}
                    
                    <label>Contraseña:<br/><span>La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula</span></label>
                    <input type="password" name="password" id="password" onChange={handleInput}/>
                    {errors.password && <span className="error"> {errors.password} </span>}
                    
                    <label>Nombre:</label>
                    <input type="text" name="name" id="name" onChange={handleInput}/>
                    {errors.name && <span className="error"> {errors.name} </span>}
                    
                    <label>Apellido:</label>
                    <input type="text" name="lastName" id="lastName" onChange={handleInput}/>
                    {errors.lastName && <span className="error"> {errors.lastName} </span>}
                    
                    <label>DNI:</label>
                    <input type="text" name="dni" id="dni" onChange={handleInput}/>
                    {errors.dni && <span className="error"> {errors.dni} </span>}
                    
                    <label>Direccion:</label>
                    <input type="text" name="address" id="address" onChange={handleInput}/>
                    {errors.address && <span className="error"> {errors.address} </span>}

                    <button type="submit" className="submit">Registrarse</button>
                </form>
            </div>
        </div>
    )
}