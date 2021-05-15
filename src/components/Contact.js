import React, { useState } from 'react'
import Container from 'reactstrap/lib/Container'
import Row from 'reactstrap/lib/Row'
import socialLinks from '../constants/socialLinks'
import { Button, FormGroup, Label, Input} from 'reactstrap';
import * as emailjs from 'emailjs-com'
import {YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, userID} from '../keys'

export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        if(!name || !email || !message) {
            alert("Please add all the required fields")
        }
        else {
            console.log(name, email, message);

            var templateParams = {
                email: email,
                name: name,
                message: message,
            };
             
            emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, userID)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

            setName("")
            setEmail("")
            setMessage("")
            alert("message sent")
        }
    }

    return (
        <div id="contact" className="contact section-odd">
            <Container>
                <div className="card py-5 my-5 px-3 px-md-5 mx-md-5">
                    <h1 className="mb-3">Get in Touch</h1>
                    <Row className="justify-content-center">
                        { socialLinks.map(link => {
                                return (
                                    <div key={link.id} className="px-3 contact-link">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                                            {link.icon}
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </Row>
                    <div className="form my-5 mx-md-5">
                        <FormGroup>
                            <Label for="Name">Name</Label>
                            <Input 
                                type="text" 
                                id="Name" 
                                placeholder="Enter your Name" 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Email">Email</Label>
                            <Input 
                                type="email"
                                id="Email" 
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)} 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Message</Label>
                            <Input 
                                rows="5" 
                                type="textarea"
                                id="message" 
                                placeholder="Enter your Message" 
                                value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={handleSubmit}>Send</Button>
                        </FormGroup>
                    </div>
                </div>
            </Container>
        </div>
    )
}
