import React from 'react'
import styles from './header.module.css'

const Header = props => {
    return (
        <header className={styles.header}>
            <h4 className={styles.headerTitle}>Contacts</h4>
            <div className={styles.searchbox}>
                <input placeholder='Search'></input>
            </div>
        </header>
    )
}

export default Header
