import React from 'react';
import styles from './footer.module.css';

function Footer() {
    return (
        <footer>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h3>Contato</h3>
                    <p>Email: contato@exemplo.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </div>
                <div className={styles.socialLinks}>
                    <h3>Siga-nos</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
                <div className={styles.copyright}>
                    <p>© 2024 Sua Empresa. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
