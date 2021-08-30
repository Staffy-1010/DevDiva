import React from 'react'
import { Button, Card, Figure, Image } from 'react-bootstrap'
import med from "./pics/symbol.gif"
import mail from "./pics/mail.png"
import chem from "./pics/doccc.png"
import Navv from './Navv'

function Projects() {
    return (
        <div>
        <Navv></Navv>
        <br></br>
        <Card className="text-center border-0 h1 bg-transparent tech">
        <Card.Body>
           MY PROJECTS
        </Card.Body>
        </Card>
        <br></br>
        <a href="https://github.com/Staffy-1010/Medi-Dose">
        <Card className=" text-end text-center container project">
            <blockquote className="blockquote mb-0 card-body">
            <p className="h1">
            <Figure.Image
                width={200}
                height={200}
                src={med}
            />
            <Figure.Caption style={{color:"black"}}>
                MEDIDOSE (ongoing)
            </Figure.Caption>
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                <cite title="Source Title" className="h3">A site to donate medicines during tough times.
                </cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        </a>
        <br></br>
        <a href="https://github.com/Staffy-1010/NodeMailer">
        <Card className="text-end text-center container project">
            <blockquote className="blockquote mb-0 card-body">
            <p className="h1">
            <Figure.Image
                width={200}
                height={200}
                src={mail}
            />
            <Figure.Caption style={{color:"black"}}>
                NodeMailer
            </Figure.Caption>
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                <cite title="Source Title" className="h3">It is a project which basically sends a mail to a single person and to all the Mail-Id's in the database with just 
                a click.</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        </a>
        <br></br>
        <a href="http://chemecca.000webhostapp.com/">
        <Card className="text-end text-center container project">
        
            <blockquote className="blockquote mb-0 card-body">
            <p className="h1">
            <Figure>
            <Figure.Image
                width={200}
                height={200}
                src={chem}
            />
            <Figure.Caption style={{color:"black"}}>
                Chemecca
            </Figure.Caption>
            </Figure>
            </p>
            <footer className="blockquote-footer">
                <small className="text-muted">
                <cite title="Source Title" className="h3">1)Health tips <br></br>2) Calculation of body mass index<br></br> 3) Know your physician-Doctor’s profile<br></br> 4) Know your
                patient-Patient’s profile <br></br>5) Easy prescription handling</cite>
                </small>
            </footer>
            </blockquote>
        </Card>
        </a>
        </div>
    )
}

export default Projects
