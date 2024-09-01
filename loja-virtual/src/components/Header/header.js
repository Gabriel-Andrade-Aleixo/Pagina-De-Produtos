import { Link } from 'react-router-dom';
import styles from "./header.module.css"

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <>
            <nav>
                <div className={styles.logo}>
                    <h1>Header</h1>
                </div>
                <div className={styles.menuButton} onClick={toggleMenu}>
                    ☰
                </div>
                <ul className={styles.navLinks}>
                    <li><link to="/">Início</link></li>
                    <li><link to="/products">Produtos</link></li>
                    <li><link to="/choes">Sapatos</link></li>
                    <li><link to="/clothes">Camisas</link></li>
                    <li><link to="/eletronics">Eletrônicos</link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;