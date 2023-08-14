import styles from './Header.module.css';
import amizelyLogo from '../assets/amizely-logo.png';


export function Header(){
    return (
        <header className={styles.header}>
            <img src={amizelyLogo} alt="amizely-logo" />
            <strong>Amizely</strong>

        </header>
    );
}