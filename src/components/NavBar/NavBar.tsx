import React from 'react';
import styles from './NavBar.module.css'
const NavBar = () => {
    return (
        <header className={styles.header}>
        <nav className={styles.nav_container}>
            <div>mealRecipes</div>
        </nav>
        </header>
    )
}
export default NavBar