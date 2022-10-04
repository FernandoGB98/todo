import styles from '../Header/styles.module.css';

import rocketIcon from '../../assets/Logo.png';

export function Header() {
  return (
    <header className={styles.header} >
      <img src={rocketIcon} alt="Rocket" />
    </header>
  ); 
}