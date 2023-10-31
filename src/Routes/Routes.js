import React from "react";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Login from "../Pages/Login";
import UserPage from "../Pages/UserPage";
import Product from "../Pages/Product";
import Signup from "../Pages/Signup";
import Delete from "../Pages/Delete";
import Edit from "../Pages/Edit";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function Links() {
    return (
        // Configuracion de nuestras rutas mediante react-router-dom
        <BrowserRouter>
            <Routes>
                {/* Ruta Home */}
                <Route path="/" element={<Home/>}></Route>

                {/* Ruta de cada producto */}
                <Route path="/product" element={<Product/>}></Route>

                {/* Ruta para el carrito */}
                <Route path="/carrito" element={<Cart/>}></Route>

                {/* Ruta para el login */}
                <Route path="/login" element={<Login/>}></Route>

                {/* Ruta para ver lo datos de usuario */}
                <Route path="/userPage" element={<UserPage/>}></Route>

                {/* Ruta para el registro */}
                <Route path="/signup" element={<Signup/>}></Route>

                {/* Ruta para la edicion de nuestros datos */}
                <Route path="/edit" element={<Edit/>}></Route>

                {/* Ruta para eliminar un usuario */}
                <Route path="/delete" element={<Delete/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}