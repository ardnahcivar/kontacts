import React from 'react'
import SideDrawer from './../side-drawer/side-drawer'
import ContactList  from './../contact-list/contact-list'
import CreateContact from './../create-contact/create-contact'
const Main = props => {
    return (
        <main>
            <SideDrawer />
            <ContactList />
            <CreateContact />
        </main>
    )
}

export default Main