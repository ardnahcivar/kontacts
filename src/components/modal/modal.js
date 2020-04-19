import React from 'react'
import { Button, Modal} from 'react-bootstrap';


const ModalTemplate = props =>{
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>Close</Button>  
                <Button onClick={(e) =>props.validations(e)}>Submit</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalTemplate