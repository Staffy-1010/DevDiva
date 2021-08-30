import React from 'react'
import { Button, Card, OverlayTrigger, Popover } from 'react-bootstrap'
import pic from './pics/intro2.jpeg'
import Navv from './Navv'
import l2 from './pics/l1.png'

function Introduction() {
    return (
        <>
        <Navv></Navv>
        <div className="container">
           <Card style={{verticalAlign:"middle"}} className="skills container text-center font-weight-bolder col-md-12 bg-transparent float-none border-0 h2">
            <Card.Body>
            <Card.Img height="400"className="col-md-4 rounded-circle intro" style={{border:"7px black solid",boxShadow:"0px 0px 15px white"}} ></Card.Img>
            </Card.Body>
            <Card.Body>
            I am an undergraduate student pursuing Chemical Engineering in Dr BR Ambedkar National Institute of Technology, Jalandhar.
            By Interest I am into programming , problem solving , building logics to solve the problem in the most efficient manner.
            A person with determination , zeal , passion , enthusiasm . So whatever task is provided giving all what it takes this is how I work.
            </Card.Body>
            </Card>
            <center>
            <div className="d-grid gap-2">
            <Button className="project col-md-3" size="lg">
               <a href="resume" className="tech"> RESUME</a>
            </Button>
            <Button className="project col-md-3" size="lg">
                <a href="cert" className="tech">CERTIFICATIONS</a>
            </Button>
            <Button className="project col-md-3" size="lg">
                <a href="achievement" className="tech">ACHIEVEMENTS</a>
            </Button>
            </div>
            </center>
        </div>
        </>
    )
}

export default Introduction
