import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>To do list</h1>
    </header>
  )
}

export default Header
