import { v1 as uuid} from 'uuid'
import { 
        ADD_CONTACT,
        REMOVE_CONTACT,
        EDIT_CONTACT,
        DETAIL_CONTACT,
        TOGGLE_MODAL
 } from './actions'

const persistedData = JSON.parse(localStorage.getItem('contacts-data'))

const initialState = {
    modal:false,
    detailView:false,
    contacts:[]
}

if(persistedData.length){
    initialState.contacts = persistedData
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                contacts:[
                    ...state.contacts,
                    action.payload,
                ]
            }
        case EDIT_CONTACT:
            let editIndex = state.contacts.findIndex(contact => contact.id === action.payload.id)
            let updatedContacts = [...state.contacts]
            updatedContacts[editIndex] = action.payload
            return {
                ...state,
                contacts:updatedContacts
            }
        case REMOVE_CONTACT:
            let index = state.contacts.findIndex(contact => contact.id === action.payload)
            state.contacts.splice(index,1)
            if(index !== -1){
                return {
                    ...state,
                    contacts:[...state.contacts]
                }
            }

        case TOGGLE_MODAL:
            return {
                ...state,
                modal:!state.modal
            }
            
        case DETAIL_CONTACT:
            return {
                ...state,
                detailView:!state.detailView
            }
        default:
            return state
    }
}

export default reducer