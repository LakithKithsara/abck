import React,{useState} from 'react';
import Title from '../Components/Title';
import Sidebar  from '../Components/Sidebar';
import { Button,Form,Col,Table, Collapse } from 'react-bootstrap'
import { FaTrash,FaPen } from "react-icons/fa";


const Users =()=>{
    const [show,setShow]=useState(false)
    return(
        <>
            <div className="users" >
                <Sidebar></Sidebar>
                
                <Title title="U S E R S"></Title>
                <div>
                    <Button variant="dark" onClick={()=>setShow(!show)}aria-controls="form" aria-expanded={show}>+ Add New User</Button>
                    <Collapse in={show}>
                        <div className="containerFluid" style={{boxShadow:'0 6px 6px gray',padding:'1rem'}}>
                            <Form>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label><h6>First Name</h6></Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label><h6>Last Name</h6></Form.Label>
                                    <Form.Control type="text" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><h6>Email</h6></Form.Label>
                                    <Form.Control type="Email" placeholder="Enter Email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label><h6>Mobile No:</h6></Form.Label>
                                    <Form.Control type="text" placeholder="07x xxx xxx" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label><h6>Gender</h6></Form.Label>
                                    <div class="form-check" style={{display:'inline-flex'}}>
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                            <label class="form-check-label" for="exampleRadios1">
                                                Male
                                            </label>
                                            </div>
                                            <div class="form-check" style={{display:'inline-flex'}}>
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                                            <label class="form-check-label" for="exampleRadios2">
                                                Fe-Male
                                            </label>
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                    <Form.Label><h6>User Role</h6></Form.Label>
                                    <Form.Control as="select" className="my-1 mr-sm-2" id="inlineFormCustomSelectPref" custom>
                                                <option value="0">Choose...</option>
                                                <option value="1">Receptionist</option>
                                                <option value="2">Guide</option>
                                                <option value="3">Steward</option>
                                                <option value="3">Kitchen Staff</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form.Row>
                            </Form>
                        </div>
                    </Collapse>
                        
                </div>
                <br></br><br></br>
                <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Gender</th>
                        <th>User Type</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>darshanaravindu9196@gmail.com</td>
                            <td>071 125 3698</td>
                            <td>Male</td>
                            <td>Guid</td>
                            <td style={{textAlign:'center'}}><Button><FaTrash /></Button> <Button><FaPen /></Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}><Button><FaTrash /></Button> <Button><FaPen /></Button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>071 125 3698</td>
                            <td>Female</td>
                            <td>Steward</td>
                            <td style={{textAlign:'center'}}><Button><FaTrash /></Button> <Button ><FaPen /></Button></td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
            
        </>
    )
}
export default Users;