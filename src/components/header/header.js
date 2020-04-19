import React from 'react'
import styles from './header.module.css'    
import { MdAccountCircle } from 'react-icons/md'
import { MdSearch } from 'react-icons/md'

const Header = props => {
    return (
        <header className={styles.header}>
            <MdAccountCircle size={30} />
            <h4 className={styles.headerTitle}>Contacts</h4>
            <div className={styles.searchbox}>
                <span className={styles.searchIcon}>
                    <MdSearch size={25} color={'#a13acb'}  />
                </span>
                <input placeholder='Search'></input>
            </div>
        </header>
    )
}

export default Header
