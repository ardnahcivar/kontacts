import { ADD_CONTACT,
        TOGGLE_MODAL
 } from './actions'

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT ,
        payload:contact
    }
}

export const toggleModal = _  => {
    return {
        type: TOGGLE_MODAL
    }
}





