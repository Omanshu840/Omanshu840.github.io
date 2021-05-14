import React from "react"
import { Container, Row } from "reactstrap";
import pageLinks from '../constants/pageLinks'
import socialLinks from '../constants/socialLinks'

class Footer extends React.Component {

    render() {
    return (
        <footer className="section">
                <Container>
                    <Row className="text-center">
                        <div className="col-md-6">
                            <h3 className="py-4">Links</h3>
                            <ul>
                                {pageLinks.map(link => {
                                return (
                                    <li key={link.id}>
                                        <a href={link.url}>{link.text}</a>
                                    </li>
                                )
                                })
                            }
                            </ul>
                        </div>
                        <div className="col-md-6 text-center">
                            <h3 className="py-4">Contact Information</h3>
                                { socialLinks.map(link => {
                                        return (
                                                <a href={link.url} className="social-link">
                                                    {link.icon}
                                                </a>
                                        )
                                    })
                                }
                        </div>
                    </Row>
                </Container>
        </footer>
    )}
}

export default Footer;