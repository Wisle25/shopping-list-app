import React from 'react'
import styles from './Navbar.module.css'
import shoppingIcon from '../../assets/shopping-icon.svg'

const navbar = () => {
  return (
  <nav className={styles.nav}>
    <img className={styles.navIcon} src={shoppingIcon} alt="Shopping Icon"/>
    <h1 className={styles.navTitle}>Shopping List</h1>
  </nav>
  )
}

export default navbar
