import React from 'react'
import SideDrawer from './../side-drawer/side-drawer'
import ContactList  from './../contact-list/contact-list'

const Main = props => {
    return (
        <main>
            <SideDrawer />
            <ContactList />
        </main>
    )
}

export default Main