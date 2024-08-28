import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

console.log()

console.log(igniteLogo)

export function Header() {
    return (
       <header className={styles.header}> 
            <img src={igniteLogo} alt="Logotipo do ignite" />
            
            <strong >Ignite Feed</strong>
       </header>
    );
}