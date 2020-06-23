import React, { Component } from 'react'
import {Container, Row, Col , Form , Button} from 'react-bootstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Tryselect extends Component {
    state = {
        deliveryitems :[],
        startDate: new Date()
    }
    dateOnChange = date => {
        this.setState({
          startDate: date
        });
      };
    componentDidMount() {
        fetch('https://60ed2d1c-68d1-4bbd-9228-acd0c2496cfe.mock.pstmn.io/category-item')
          .then(response => response.json())
          .then(deliveryitems => this.setState({ deliveryitems }));
      }
    render() {
        return (       
                <div className="mt-5">
                <Container>
                    <Row>
                        <Col sm={12}><h2>Item Delivery Module</h2></Col>
                    </Row>    
                    <Row className='mt-5'>
                        <Col sm={4}>
                        <h5>Item for Delivery</h5>
                        <Form className="mt-5"> 
                      
                            <Form.Group as={Row} >
                                <Form.Label column sm="2">
                                Category
                                </Form.Label>
                                <Col md={{ span: 8, offset: 1 }} sm="9">
                                <Form.Control as="select" defaultValue="Choose...">{
                                    this.state.deliveryitems.map(items=><option value = "items.value">{items.category}</option>)
                                }
                                </Form.Control>
                                </Col>
                            </Form.Group>
        
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Item
                                </Form.Label>
                                <Col md={{ span: 8, offset: 1 }} sm="9">
                                <Form.Control as="select" defaultValue="Choose...">{
                                    this.state.deliveryitems.map(items=><option value = "items.value">{items.item}</option>)
                                }
                                </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Weight
                                </Form.Label>
                                <Col md={{ span: 8, offset: 1 }} sm="9">
                                <Form.Control type="text" placeholder="" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm="2">
                                Quantity
                                </Form.Label>
                                <Col md={{ span: 8, offset: 1 }} sm="9">
                                <Form.Control type="text" placeholder="" />
                                </Col>
                            </Form.Group>
                            </Form>
                     </Col>
                        <Col sm={8}>
                            <Row>
                                <Col>
                                <h5 className="mb-0">Delivery Details</h5>
                                <Form className="mt-4">
                                     <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Time of Delivery</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                    </Form.Group>
                                    <Form inline>
                                    <Form.Group as={Col}>
                                    <Form.Label>Express Delivery</Form.Label>
                                    
                                    {[ 'radio'].map((type) => (
                                        <div key={`custom-inline-${type}`} className="mb-3 mt-3 ml-4">
                                        <Form.Check
                                            custom
                                            inline
                                            label="Yes"
                                            type={type}
                                            id={`custom-inline-${type}-1`}
                                        />
                                        <Form.Check
                                            custom
                                            inline
                                            label="No"
                                            type={type}
                                            id={`custom-inline-${type}-2`}
                                        />                                 
                                        </div>
                                    ))}
                                    </Form.Group>
                                    </Form>
                                  
                                </Form>
                                </Col>
                                
                                <Col>
                                <h5 className="mb-0">Delivery Date</h5>
                               <DatePicker className="mt-3"
                                    selected={this.state.startDate}
                                    onChange={this.dateOnChange}
                                />
                                </Col>
                            </Row>
                        </Col>                
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col>
                        <Form.Group>
                             <Form.Label>Requestor</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group>
                           <Form.Label>Logistic Company</Form.Label>
                              <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        </Col>
                        <Col>                 
                            <div className="mt-5"> 
                            <Button variant="secondary" className="pl-5 pr-5">Save</Button>{' '}
                            <Button variant="primary" className="ml-3 pl-5 pr-5">Capture</Button>{' '}
                            </div>                               
                        </Col>
                    </Row>
                    </Container>
                </div>
            )
        
    }
}
