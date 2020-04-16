import { ADD_CONTACT,
        TOGGLE_MODAL
 } from './actions'

const initialState = {
    modal:false,
    contacts:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_CONTACT:
            console.log(`aclled te add contact`)
            return state
        case TOGGLE_MODAL:
            return {
                ...state,
                modal:!state.modal
            }
        default:
            return state
    }
}

export default reducer