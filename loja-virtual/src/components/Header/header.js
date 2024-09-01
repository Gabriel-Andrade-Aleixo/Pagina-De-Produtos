import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from "./header.module.css";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <nav>
            <div className={styles.logo}>
                <h1>Header</h1>
            </div>
            <div className={styles.menuButton} onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/products">Produtos</Link></li>
                <li><Link to="/shoes">Sapatos</Link></li>
                <li><Link to="/clothes">Camisas</Link></li>
                <li><Link to="/eletronics">Eletrônicos</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
