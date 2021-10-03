import React from 'react';
import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';


const NavBar = () => {
    return (
        <nav className="navContainer">
            <ul className="navList">
            <h1>Magdiel Ecommerce</h1>
            <li><a href="/">Home</a></li>
            <li><a href="/">Ofertas</a></li>
            <li><a href="/">tendencias</a></li>
            <li><a href="/">Perfil</a></li>
           
            <CardWidget />
            </ul>
        </nav>
    );
};

export default NavBar;