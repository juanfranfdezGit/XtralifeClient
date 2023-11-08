import Logo from "../Media/logo.png";
import CartLogo from "../Media/cartlogo.png";
import UserLogo from "../Media/userlogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    // Importa la función 'useNavigate' de React Router
    const navigate = useNavigate();

    // Estado y funcion para gestionar el slider
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    // Navega a la home
    const home = () => {
        navigate("/");
    }

    // Navega al carrito
    const cart = () => {
        navigate("/carrito");
    }

    // Navega a la pagina de login
    const login = () => {
        navigate("/login");
    }

    // Gestiona el estado del slider para cuando nos encontremos en dispositivos moviles
    const toggleSlider = () => {
        setIsSliderOpen(!isSliderOpen);
    }

    return(
        <nav className="Nav">

            {/* Renderiza el menu en PC */}
            <div className="NavLogo" onClick={home}>
                <img src={Logo} className="NavLogoImg"></img>
                <h1 className="LogoTitle">X-Tralife</h1>
            </div>
            <div className="Cart">
                <div className="CartLogo" onClick={cart}>
                    <img src={CartLogo}></img>
                    <h2 className="CartNumb">0</h2>
                    <h1>Carrito</h1>
                </div>
                <div className="UserLogo" onClick={login}>
                    <img src={UserLogo}></img>
                </div>
            </div>

            {/* Renderiza el menu en dispositivos moviles */}
            <div className="BurguerMenu" onClick={toggleSlider}>
                <span className="burguers"></span>
                <span className="burguers"></span>
                <span className="burguers"></span>
            </div>
            <div className={`Slider ${isSliderOpen ? 'sliderOn' : ''}`}>
                <h1 className="close" onClick={toggleSlider}>X</h1>
                <div className="SliderCart" onClick={cart}>
                    <h1>Carrito <span>0</span></h1>
                </div>
                <div className="SliderUserCont">
                    <img src={UserLogo} className="SliderUser" onClick={login}></img>
                </div>
            </div>   
        </nav>
    )
}