import { createStore } from 'redux'
import reducer from './reducer'


const store = createStore(reducer)
store.subscribe(() => {
    let contacts = store.getState().contacts
    localStorage.setItem('contacts-data',JSON.stringify(contacts))
})

export default store