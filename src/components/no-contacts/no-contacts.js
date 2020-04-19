import React from 'react'
import styles from './no-contacts.module.css'


const NoContacts = props => {
    return (
        <div className={styles.no_contacts}>
           <p>No contacts added,  please use Create Contact button to create</p>
        </div>
    )
}

export default NoContacts
