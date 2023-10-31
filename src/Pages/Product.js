import Navbar from "./Navbar";
import Working from "../Media/working.gif"

export default function Product() {
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