import React from 'react'
import './index.css'
import { Card, ProgressBar} from 'react-bootstrap'
import Navv from './Navv'

function skills() {
    return (
        <div>
        <Navv></Navv>
        <Card className="text-center border-0 h1 bg-transparent tech">
        <Card.Body>
           MY TECH-STACK 
        </Card.Body>
        </Card>
        <Card className="skills text-center font-weight-bolder col-md-12 bg-transparent float-right border-0 h2">
        <Card.Body>
        A fresher with a great hold over some amazing real-life projects which will help me smoothly working in your organization. A person that firmly believes in holistic development, therefore, being from a chemical background I do possess a decent hold on some crucial Tech-Skills. Passionate about Coding, Problem Solving and Data Structures and Algorithms. Also, I am a member of Google Developer Students Club. And all this clearly indicates my dedication towards my career, making me a career-oriented person.
        </Card.Body>
        </Card>
        <br></br><br></br><br></br>
        <Card className=" text-center col-md-4 bg-transparent float-right border-0 h6">
        <Card.Body>
        <p className="h3">Coding/Problem Solving</p>
           <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="C++ Language" variant="dark" animated now={100} /><br></br>
           <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="C Language" variant="dark" animated now={100} /><br></br>
            <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="DATA STRUCTURES AND ALGORITHMS" variant="dark" animated now={100} /><br></br>
        </Card.Body>
        </Card>
        <Card className=" text-center col-md-4 bg-transparent float-right border-0 h6">
        <Card.Body>
        <p className="h3">FULL STACK Web Technologies</p>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="JAVASCRIPT" variant="dark" animated now={100} /><br></br>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="HTML5 + CSS3" variant="dark" animated now={100} /><br></br>
        <ProgressBar height="100" className="rounded-circle text-center text-dark" style={{letterSpacing:"1px",textColor:"red"}} label="BOOTSTRAP" variant="dark" animated now={100} /><br></br>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="MYSQL" variant="dark" animated now={100} /><br></br>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="JQUERY" variant="dark" animated now={100} /><br></br>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="PHP" variant="dark" animated now={100} /><br></br>
        <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="ANGULARJS" variant="dark" animated now={100} /><br></br>
        </Card.Body>
        </Card>
        <Card className=" text-center col-md-4 bg-transparent float-right border-0 h6">
        <Card.Body>
            <p className="h3">MERN STACK Technologies</p>
            <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="NODE.JS" variant="dark" animated now={100} /><br></br>
            <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="REACT.JS"  variant="dark" animated now={100} /><br></br>
            <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="EXPRESS.JS" variant="dark" animated now={100} /><br></br>
            <ProgressBar className="rounded-circle" style={{letterSpacing:"1px"}} label="MONGODB" variant="dark" animated now={100} /><br></br>
        </Card.Body>
        </Card>
        </div>
    )
}

export default skills
