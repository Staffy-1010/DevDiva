import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Navv from './Navv'
import pub from './pics/pub.png'

function Achievement() {
    return (
        <div>
            <Navv></Navv>
            <br></br>
            <Card className="text-center border-0 h1 bg-transparent tech">
            <Card.Body>
            Cleared Publicis Sapient Jumpstart 2021
            </Card.Body>
            </Card>
            <br></br>
            <Card className="border-0 col-md-6 container">
            <Card.Img src={pub}></Card.Img>
            </Card>
            <br></br>
            <br></br>
            <center>
            <div className="d-grid container gap-2">
            <Button className="project col-md-3" >
               <a href="resume" className="tech"> RESUME</a>
            </Button>
            <Button className="project col-md-3" >
                <a href="cert" className="tech">CERTIFICATIONS</a>
            </Button>
            </div>
            </center>
        </div>
    )
}

export default Achievement
