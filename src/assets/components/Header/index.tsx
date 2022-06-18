import styles from './Styles.module.css'
import Logo from '../../images/logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo Image" />
    </header>
  );
}