import React from 'react'
import styles from './header.module.css'    
import { MdAccountCircle,MdSettings } from 'react-icons/md'
import Search from './../search/search'

const Header = props => {
    return (
        <header className={styles.header}>
            <MdAccountCircle size={30} />
            <h4 className={styles.headerTitle}>Contacts</h4>
            <Search />
            {/* <MdSettings size={30} /> */}
        </header>
    )
}

export default Header
