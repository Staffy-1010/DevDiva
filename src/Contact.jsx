import React from 'react'
import { Card, CardGroup, Figure } from 'react-bootstrap'
import Navv from './Navv'
import l2 from './pics/l1.png'
import './pics/font-awesome-4.7.0/css/font-awesome.css'

function Contact() {
    return (
        <>
        <Navv></Navv>
        <br></br>
        <Card className="border-0 text-end text-center bg-transparent">
        <p className="h1 tech">CONTACT ME</p>
        </Card>
        <br></br>
        <br></br>
        <CardGroup>
        <Card className="text-center col-md-4 bg-transparent border-0">
        <Figure className="con">
        <i className="con" className="fa fa-phone" aria-hidden="true"></i>
        <Figure.Caption className="contact">        +91 9501860490
        </Figure.Caption>
        </Figure>
        </Card>
        <Card className="text-center col-md-4 bg-transparent border-0">
        <Figure className="con float-left">
        <i className="con fa fa-envelope" aria-hidden="true"></i>
        <Figure.Caption className="contact">
            staffy7508@gmail.com
        </Figure.Caption>
        </Figure>
        </Card>
        <Card className="text-center col-md-4 bg-transparent border-0">
        <Figure className="con">
        <i className="fa fa-address-book" aria-hidden="true"></i>
        <Figure.Caption className="contact">            Bathinda 151001,Punjab,India
        </Figure.Caption>
        </Figure>
        </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <center>
        <Card className="bg-transparent border-0">
        <center><Card.Img className="col-md-3" src={l2}></Card.Img></center></Card></center>
        </>
    )
}

export default Contact
