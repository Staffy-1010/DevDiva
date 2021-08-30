import React from 'react'
import { Card, CardDeck, CardGroup, Pagination } from 'react-bootstrap'
import Navv from './Navv'
import c1 from './pics/c1.png'

function Certification() {
    return (
        <div>
            <Navv></Navv>
            <br></br>
            <Card className="text-center border-0 h1 bg-transparent tech">
            <Card.Body>
            C/C++ CERTIFICATE
            </Card.Body>
            </Card>
            <br></br>
            <Card className="border-0 col-md-5 container">
            <Card.Img src={c1}></Card.Img>
            </Card>
            <br></br><br></br>
            <CardGroup className="text-center col-md-2 bg-transparent container">
            <center>
            <a href="cert">
            <Card className="text-center float-left h6 bg-white tech">
            <Card.Body>
            1
            </Card.Body>
            </Card></a>
            <a href="c2">
            <Card className="text-center float-left h6 bg-transparent tech">
            <Card.Body>
            2
            </Card.Body>
            </Card></a>
            <a href="c3">
            <Card className="text-center float-left h6 bg-transparent tech">
            <Card.Body>
            3
            </Card.Body>
            </Card></a>
            </center>
            </CardGroup>
        </div>
    )
}

export default Certification
