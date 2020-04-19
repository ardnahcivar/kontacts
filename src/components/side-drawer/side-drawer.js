import React from 'react'
import styles from './side-drawer.module.css'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { MdPersonOutline,MdRestore } from 'react-icons/md'

import { addContact, toggleModal  } from './../../store/dispatchers'

const sideDrawer = props => {
    return (
        <aside className={styles.side_drawer}>
            <div className={styles.createContactBtn}>
                <Button variant="primary" size="md" onClick={() => props.addContact()}>
                    {/* Create a Contact <Plus size={30} /> */}
                </Button>
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.noOfContacts}>
                    <MdPersonOutline  color={'#1976D2'} size={30}/>
                    <div className={styles.contactCountLabel}>Contacts</div>
                    <div className={styles.contactCount}>{props.contacts.length}</div>
                </div>
                {/* <div className={styles.noOfContacts}>
                    <MdRestore  color={'#1976D2'} size={30}/>
                    <div className={styles.contactCountLabel}>Frequently Contacted</div>
                </div> */}
            </div>
        </aside>
    )
}

const mapStateToProps = state => {
    return {
        contacts:state.contacts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addContact:(contact) => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(sideDrawer) 
