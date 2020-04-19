import React,{useState, useEffect } from 'react'
import styles from './create-contact.module.css'
import { Form, Col, Row} from 'react-bootstrap'
import { connect } from 'react-redux'
import { PeopleCircle,Envelope} from 'react-bootstrap-icons'
import { toggleModal, addContact, editContact  } from './../../store/dispatchers'
import Modal from './../modal/modal'
import { v1 as uuid} from 'uuid'
import { MdPhone } from 'react-icons/md'

const CreateContact = props => {
    console.log(props)
    const [contact,setContact] = useState({
        firstName: props.firstName,
        lastName: props.lastName,
        email: props.email,
        phoneNumber: props.phoneNumber,
        status: props.status
    })

  const [validated, setValidated] = useState(false);

  const validations = () => {
    if(!contact.firstName.trim().length || !contact.phoneNumber.trim().length ){
      setValidated(true)
      return
    }
    setValidated(false);
    saveContact()
  };

    useEffect(() => {
        if(props.editMode){
            setContact(props.formData)
        }else{
          setContact({
            firstName:'',
            lastName: '',
            email: '',
            phoneNumber: '',
            status: false
          })
        }
    },[props.modal,props.editMode])

    const firstNameHandler = event => {
      setContact({
        ...contact,
        firstName:event.target.value
      })
      console.log(contact)
     }

     const lastNameHandler = event => {
      setContact({
        ...contact,
        lastName:event.target.value 
      })
      console.log(`last name`)
      console.log(contact)
    }

    const emailHandler = event => {
      setContact({
        ...contact,
        email:event.target.value
      })
    }

    const phoneHandler = event => {
      setContact({
        ...contact,
        phoneNumber:event.target.value
      })
    }

    const statusHandler = event => {
      setContact({
        ...contact,
        status: !contact.status
      })
      console.log(`status changed`)
      console.log(event.target.value)
    }
    
    const saveContact = _ => {
      if(props.editMode){
        props.toggleEditMode()
        props.editContact(contact)
        props.toggleModal()
        props.toggleEditMode()
      }else{
        contact.id = Date.now()
        props.createContact(contact)
        props.toggleModal()
      }
     
    }

   return (
      <>
        <Modal
          show={props.modal}
          onHide={props.editMode ? () => {props.toggleModal();props.toggleEditMode()}:props.toggleModal}
          onSave={saveContact}
          closeModal={props.editMode ? () => {props.toggleModal();props.toggleEditMode()}:props.toggleModal}
          title={props.editMode ? 'Edit the contact' : 'Create a contact'}
          validations = {validations}
        >
          <Form noValidate validated={validated}>
          <Form.Group>
              {/* <Row xs={12}>
                  <Col xs={1} lg={2}> 
                      <Col xs={12} sm={3} md lg={1}>
                        <PeopleCircle color="gray" size={40} />
                      </Col>
                  </Col>
                  <Col xs={10} lg={8}>
                      <Col xs={12} sm={12} md lg>
                        <Form.Control type="text" placeholder="First Name" />
                      </Col>
                      <Col xs={12} sm={12} md lg>
                        <Form.Control type="text" placeholder="Last Name" />
                      </Col>
                  </Col>
              </Row> */}

              <Row>
                  <Col lg={1}>
                    <PeopleCircle color="gray" size={30} />
                  </Col>
                  <Col lg={5}>
                    <Form.Control type="text" required value={contact.firstName} onChange={(e)=>firstNameHandler(e)} placeholder="First Name" />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid username.
                    </Form.Control.Feedback>
                  </Col>
                  <Col lg={5}>
                    <Form.Control type="text" value={contact.lastName} onChange={(e)=>lastNameHandler(e)} placeholder="Last Name" />
                  </Col>
              </Row>
              <Row>
                <Col lg={1}>
                  <Envelope color="gray" size={30} />
                </Col>
                <Col lg={8}>
                  <Form.Control type="email" placeholder="Enter email" value={contact.email} onChange={(e)=>emailHandler(e)} /> 
                </Col>
              </Row>
              <Row>
                <Col lg={1}>
                  <MdPhone color='gray' size={30}/>                   
                </Col>
                <Col lg={8}>
                  <Form.Control required type="text" placeholder="Enter phone number" value={contact.phoneNumber} onChange={(e)=>phoneHandler(e)} /> 
                  <Form.Control.Feedback type="invalid">
                      Please provide a valid phone number.
                  </Form.Control.Feedback>
                </Col>
              </Row>
              <Row>
                <Col lg={1}>
                  Status
                </Col>
                <Col lg={11}>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Active"
                    checked={contact.status}
                    value={contact.status}
                    onChange={(e)=>statusHandler(e)}
                  />
                </Col>
              </Row>
          </Form.Group>
          </Form>
        </Modal>

      </>
    );
  }

const mapStateToProps = state => {
  return {
    modal:state.modal
  }
}

const mapDispatchToProps = dispatch => {
    return {
      toggleModal:() => dispatch(toggleModal()),
      createContact:(contact) => dispatch(addContact(contact)),
      editContact:(contact) => dispatch(editContact(contact))
    }
}

CreateContact.defaultProps = {
  firstName:'',
  lastName:'',
  email:'',
  phoneNumber:'',
  status:false
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateContact) 