import React,{useState} from 'react'
import styles from './create-contact.module.css'
import { Button, Modal, Form, Col, Row} from 'react-bootstrap';
import { connect } from 'react-redux'
import { PeopleCircle,Envelope} from 'react-bootstrap-icons';
import { toggleModal  } from './../../store/dispatchers'

const CreateContact = props => {
  console.log('create cota')  
    console.log(props)
    const [contact,setContact] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        status:0
    })

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
        status:event.target.value
      })
      console.log(`status changed`)
      console.log(event.target.value)
    }
    
    const saveContact = _ => {
      console.log('saved contact')
      console.log(contact)
    }

   return (
      <>
        <MyVerticallyCenteredModal
          show={props.modal}
          onHide={props.toggleModal}
          firstNameHandler={firstNameHandler}
          lastNameHandler={lastNameHandler}
          emailHandler={emailHandler}
          phoneHandler={phoneHandler}
          statusHandler={statusHandler}
          onSave={saveContact}
          closeModal={props.toggleModal}
        />
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
      toggleModal:() => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateContact) 


function MyVerticallyCenteredModal(props) {
  console.log(props)
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
                    <Form.Control type="text" onChange={(e)=>props.firstNameHandler(e)} placeholder="First Name" />
                  </Col>
                  <Col lg={5}>
                    <Form.Control type="text" onChange={(e)=>props.lastNameHandler(e)} placeholder="Last Name" />
                  </Col>
              </Row>
              <Row>
                <Col lg={1}>
                  <Envelope color="gray" size={30} />
                </Col>
                <Col lg={8}>
                  <Form.Control type="email" placeholder="Enter email" onChange={(e)=>props.emailHandler(e)} /> 
                </Col>
              </Row>
              <Row>
                <Col lg={1}>
                    Phone Number
                </Col>
                <Col lg={8}>
                  <Form.Control type="text" placeholder="Enter phone number" onChange={(e)=>props.phoneHandler(e)} /> 
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
                    onChange={(e)=>props.statusHandler(e)}
                  />
                </Col>
              </Row>
          </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>Close</Button>  
        <Button onClick={() => props.onSave()}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}