import React,{useState, useEffect } from 'react'
import { Button, Modal, Row, Col, Form} from 'react-bootstrap';
import { PeopleCircle,Envelope} from 'react-bootstrap-icons'
import { MdPhone, MdLens } from 'react-icons/md'
import styles from './detail-contact.module.css'

const DetailContact = props => {
    return(
        <Modal
            size="lg"
            show={props.show}
            onHide={props.hide}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Contact details 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col lg={1} xs={1} sm={1}>
                        <PeopleCircle color="gray" size={30} />
                    </Col>
                    <Col lg={9} xs={9}  sm={9}>
                        <div className={styles.name}>
                            {props.firstName +' '+props.lastName}
                        </div>
                    </Col>

                    <Col lg={2} xs={2}  sm={2}>
                    <div className={styles.status}>
                        {
                            props.status 
                            ?
                            <MdLens color="#66bb6a" title="active" size={30} />
                            :
                            <MdLens color="gray" title="inactive" size={30} />
                        }
                    </div>
                    </Col>
                </Row>

                <Row>
                <Col lg={1} xs={1}  sm={1}>
                    <Envelope color="gray" size={30} />
                </Col>
                <Col lg={11} xs={11}  sm={11}>
                    <div>
                        {props.email || '-'}
                    </div>
                </Col>
                </Row>
                <Row>
                <Col lg={1} xs={1}  sm={1}>
                    <MdPhone color='gray' size={30}/>
                </Col>
                <Col lg={11} xs={11}  sm={11}>
                    <div className={styles.phoneNumber}>
                        {props.phoneNumber || '-'}
                    </div>
                </Col>
              </Row>
                
            </Modal.Body>                
        </Modal>
    )
}

export default DetailContact    