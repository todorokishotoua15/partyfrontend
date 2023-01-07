import logo from './logo.svg';
import './App.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

function App() {

    const [name,setname] = useState("");
    const [mobile,setmobile] = useState("");
    const [item,setitem] = useState("");
    const [email,setemail] = useState("");

    var pref = "91";

    function sendmessage(event) {
        event.preventDefault();
        axios.post('https://partybackend-8m0q.onrender.com/users/', {
            name : name.value,
            mobile : pref + mobile.value,
            prod : item.value,
            email : email.value,
        })
        .then(function (response) {
            console.log(response);
            alert("Registration Successfull!");
        })
        .catch(function (error) {
            console.log(error);
            alert("An error occured!");
        });
    }

  return (
    <div className="container">
        <div className='row mt-5'>
            <Form>
            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Name</Label>
            <Col sm={10}>
                <Input type="text" name="text" id="exampleEmail" placeholder="with a placeholder" innerRef={(inp) => setname(inp)} />
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Mobile Number</Label>
            <Col sm={10}>
                <Input type="text" name="text" id="exampleEmail" placeholder="with a placeholder" innerRef={(inp) => setmobile(inp)}/>
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Item You want</Label>
            <Col sm={10}>
                <Input type="text" name="text" id="exampleEmail" placeholder="with a placeholder" innerRef={(inp) => setitem(inp)}/>
            </Col>
            </FormGroup>

            <FormGroup row>
            <Label for="exampleEmail" sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="text" name="text" id="exampleEmail" placeholder="with a placeholder" innerRef={(inp) => setemail(inp)}/>
            </Col>
            </FormGroup>
            
            <FormGroup>            
            <Col sm={{ size: 10, offset: 2 }}>
                <button className='btn btn-dark' onClick={sendmessage}>Submit</button>
            </Col>
            </FormGroup>
        </Form>
        </div>
    </div>
  );
}

export default App;
