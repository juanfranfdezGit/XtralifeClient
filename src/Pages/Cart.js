import Navbar from "./Navbar"
import Working from "../Media/working.gif"

// Esta pagina no ha sido contruida por lo que he usado un recurso divertido para no dejarla sin funcionar.

export default function Cart() {
    return (
        <div>
            {/* Renderiza el componente Navbar */}
            <Navbar/>

            {/* Renderiza la Imagen */}
            <div className="working">
                <img src={Working} className="working"></img>
            </div>
        </div>
    )
}