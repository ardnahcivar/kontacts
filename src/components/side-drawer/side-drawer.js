import React from 'react'
import styles from './side-drawer.module.css'
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Plus } from 'react-bootstrap-icons'

import { addContact, toggleModal  } from './../../store/dispatchers'

const sideDrawer = props => {
    return (
        <aside className={styles.side_drawer}>
            <Button variant="primary" size="md" onClick={() => props.addContact()}>
                {/* Create a Contact <Plus size={30} /> */}
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
