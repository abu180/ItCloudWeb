import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Icon, initializeIcons } from '@fluentui/react';
initializeIcons();


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <header>
            <div className="header-container">
                <div className="logo">VOLKSWAGEN GROUP SERVICES</div>
                <nav>
                    <a href="#">Mac</a>
                    <a href="#">iPad</a>
                    <a href="#">iPhone</a>
                    <a href="#">Watch</a>
                    <a href="#">AirPods</a>
                    <a href="#">TV & Home</a>
                    <a href="#">Only on Apple</a>
                    <a href="#">Accessories</a>
                    <a href="#">Support</a>
                </nav>
                <div className="icons">
                    <Icon iconName="Search" className="search-icon" />
                    <span className="menu-icon">☰</span>
                </div>
            </div>
        </header>
    )
}

export default Navbar