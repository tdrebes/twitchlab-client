import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Menu = () => (
    <>
    <p className="hover-underline-animation"><NavLink to="/">Home</NavLink></p>
    <p className="hover-underline-animation"><NavLink to="/channels">Explore</NavLink></p>
    <p className="hover-underline-animation"><NavLink to="/about">About</NavLink></p>
    <p className="hover-underline-animation"><NavLink to="/components">Components</NavLink></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="tl__navbar">
            <div className="tl__navbar-links">
                <div className="tl__navbar-links_logo">
                    <h1 className="tl__logo_text noselect">TDUnit</h1>
                </div>
                <div className="tl__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="tl__navbar-sign">
                <a href="/login">
                    <button type="button">Login</button>
                </a>
            </div>

            <div className="tl__navbar-menu">
                {toggleMenu 
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}

                {toggleMenu && (
                    <div className="tl__navbar-menu_container scale-up-ver-top">
                        <div className="tl__navbar-menu_container-links">
                            <Menu />
                            <div className="tl__navbar-menu_container-links-sign">
                                <button type="button" className>Login</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
