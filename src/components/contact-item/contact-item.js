import React, { useState } from 'react'
import styles from './contact-item.module.css'
import { Pencil,Trash} from 'react-bootstrap-icons'
import PropTypes from 'prop-types'
import { removeContact } from './../../store/dispatchers'
import { connect } from 'react-redux'

const ContactItem = props => {
    const [focus,setFocus] = useState(false)
 console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@22`)

 console.log(props)

  const edit = contactId => {
    props.edit('edit',contactId)
  }

  const remove = contactId => {
    props.remove(contactId)
  } 

    return (
        <div className={styles.contact_item} data-contactid={props.id} onMouseEnter={()=>setFocus(true)} onMouseLeave={()=>setFocus(false)}>
            <div className={styles.contact_item_firstName} data-contactid={props.id} >{props.firstName}</div>
            <div className={styles.contact_item_phoneNumber} data-contactid={props.id}>{props.phoneNumber}</div>
            {/* <div className={styles.contact_item_email} data-contactid={props.id}>{props.email}</div> */}
            
            <div className={styles.contact_item_actions} data-contactid={props.id}>
                {
                    focus
                    ?
                    (
                    <>
                        <div className={styles.contact_item_icon} onClick={(e)=>{edit(props.id);e.preventDefault();e.stopPropagation()}}>
                            <Pencil />
                        </div>
                        <div className={styles.contact_item_icon} onClick={(e)=>{remove(props.id);e.preventDefault();e.stopPropagation()}}>
                            <Trash />
                        </div>
                    </>
                    )
                    :
                    null
                }
                
            </div>
        </div>
    )
}

ContactItem.propTypes  = {
    firstName:PropTypes.string,
    phoneNumber:PropTypes.string,
    id:PropTypes.string
}

const mapStateToProps = state => {
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
      return {
        remove:(contactId) => dispatch(removeContact(contactId))
      }
  }
  

export default connect(null,mapDispatchToProps)(ContactItem)
