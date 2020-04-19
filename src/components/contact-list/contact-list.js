import React, { useState, useEffect } from 'react'
import styles from './contact-list.module.css'
import { connect } from 'react-redux'
import NoContacts from './../no-contacts/no-contacts'
import ContactItem from './../contact-item/contact-item'
import CreateContact from './../create-contact/create-contact'
import DetailContact from './../detail-contact/detail-contact'

import { toggleModal, detailContact } from './../../store/dispatchers'


const ContactList = props => {
    const [editMode,setEditMode] = useState(false)
    const [formData,setformData] = useState({})
    const [detailContact,setDetaiContact] = useState({})
    const [detailContactId,setDetaiContactId] = useState('')
    

    useEffect(() => {
        let matchedObject = props.contacts.filter(contact => contact.id === +detailContactId);
        if(matchedObject.length > 0){
            props.toggleDetailContact()
            setDetaiContact({
                ...matchedObject[0]
            })
        }
        return () => {
            
        };
    }, [detailContactId]);

    const saveContact = (type,contactId) => {
        console.log(`called save contact`)
        props.toggleModal()
        toggleEditMode()
        let matchedObject = props.contacts.filter(contact => contact.id === contactId);
        if(matchedObject.length > 0){
            setformData({
                ...matchedObject[0]
            })
        }
    }

    const toggleEditMode = _ => setEditMode(!editMode)

    const selectedContact = event => {
        const val = event.target.dataset.contactid
        setDetaiContactId(val)
        debugger
        event.preventDefault()
        event.stopPropagation()
    }

    return (
        <div className={styles.contact_list}>
            <div className={styles.heading}>
                <h3>My Contacts</h3>
                <span className={styles.noOfContacts}>({props.contacts.length})</span>
            </div>
            <div>
            {
                !props.contacts.length 
                ?
                <NoContacts />
                :
                <>
                    <div className={styles.contactsHeader}>
                        <p>Name</p>
                        <p>Phone Number</p>
                        {/* <p>Email</p> */}
                    </div>
                    <div className={styles.contacts_list_container} onClick={(e) => selectedContact(e)}>
                        {
                            props.contacts.map(contact => <ContactItem key={contact.id} {...contact} edit={saveContact}/>)
                        }
                    </div>
                </> 
            }
            {
                editMode 
                ?
                <CreateContact editMode={editMode} toggleEditMode={toggleEditMode} formData={formData} />
                :
                <CreateContact editMode={editMode} toggleEditMode={toggleEditMode} />
            }
            {
                true
                ?
                <DetailContact show={props.detailView} hide={() => {props.toggleDetailContact();setDetaiContactId('')}}  {...detailContact} />
                :
                null
            }

            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
      contacts:state.contacts,
      detailView:state.detailView
    }
  }
  
  const mapDispatchToProps = dispatch => {
      return {
        toggleModal:() => dispatch(toggleModal()),
        toggleDetailContact:() => dispatch(detailContact())
      }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ContactList)
