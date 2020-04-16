import React from 'react'
import styles from './side-drawer.module.css'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import { addContact, toggleModal  } from './../../store/dispatchers'

const sideDrawer = props => {
    console.log(props)
    console.log(typeof props.addContact)

    return (
        <aside className={styles.side_drawer}>
            <Button variant="primary" size="lg" onClick={() => props.addContact()}>
                Create a Contact
            </Button>
        </aside>
    )
}

// const mapStateToProps = state => {

// }
const mapDispatchToProps = dispatch => {
    return {
        addContact:(contact) => dispatch(toggleModal())
    }
}

export default connect(null,mapDispatchToProps)(sideDrawer) 
