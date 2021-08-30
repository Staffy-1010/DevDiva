import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Navv from './Navv'
import r from './pics/resume.png'

function Resume() {
    return (
        <div>
            <Navv></Navv>
            <br></br>
            <Card className="text-center border-0 h1 bg-transparent tech">
            <Card.Body>
            My Resume
            </Card.Body>
            </Card>
            <br></br>
            <Card className="border-0 col-md-7 container">
            <Card.Img src={r}></Card.Img>
            </Card>
            <br></br>
            <br></br>
            <center>
            <div className="d-grid container gap-2">
            <Button className="project col-md-3">
                <a href="cert" className="tech">CERTIFICATIONS</a>
            </Button>
            <Button className="project col-md-3">
                <a href="achievement" className="tech">ACHIEVEMENTS</a>
            </Button>
            </div>
            </center>
        </div>
    )
}

export default Resume
