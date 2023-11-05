import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import axios from "axios";

export default function Home() {
   
    // Importa la función 'useNavigate' de React Router
    const navigate = useNavigate();

    // Funcion para navegar a la pagina product
    const producto = () => {
        navigate('/product')
    }

    // Estado 'products' y función 'setProducts' para gestionar una lista de productos.
    const [products, setProducts] = useState([]);

    // Funcion para recoger los productos de nuestra base de datos
    const getProducts = async () => {
        const { data } = await axios.get('https://xtralife-server.onrender.com/')

        setProducts(data);
    }

    // Ejecuta la funcion una vez montado el componente
    useEffect(() => getProducts, []);

    return (
        <div className="HomeScreen">

            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza una card por cada producto que tenemos disponible en el array recogido de nuestra base de datos */}
            <div className="CardsScreen">
            {
            products.map((products) => (
                <div className="Card">
                    <img src={products.imageUrl} className="CardImg"></img>
                    <h1 className="CardTitle">{products.name}</h1>
                    <p className="CardDescription">
                        {products.description}
                    </p>
                    <div className="CardBot">
                        <button className="CardBuy" onClick={producto}>Detalles</button>
                        <h1 className="CardPrice">{products.price}€</h1>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    )
 }