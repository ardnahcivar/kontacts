import { 
        ADD_CONTACT,
        EDIT_CONTACT,
        REMOVE_CONTACT,
        DETAIL_CONTACT,
        TOGGLE_MODAL
 } from './actions'

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT ,
        payload:contact
    }
}

export const editContact = (contact) => {
    return {
        type: EDIT_CONTACT ,
        payload:contact
    }
}

export const removeContact  = contactId => {
    return {
        type: REMOVE_CONTACT,
        payload:contactId
    }
}

export const detailContact = _  => {
    return {
        type: DETAIL_CONTACT
    }
}

export const toggleModal = _  => {
    return {
        type: TOGGLE_MODAL
    }
}





