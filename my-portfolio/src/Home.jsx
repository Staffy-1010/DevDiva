import React from 'react'
import { Button, Card } from 'react-bootstrap'
import l2 from './pics/l1.png'


function Home() {
    return (
        <div>
        <br></br><br></br><br></br><br></br>
        <Card className="bg-transparent container text-center h1 home">
        
        <Card.Body>
        <center><Card.Img className="col-md-9" variant="top" height="400" src={l2} /></center>
        <Button variant="outline-warning" className="btnn col-md-2 font-weight-bolder" href="intro">Let's Start</Button>{' '}
        </Card.Body>
        </Card>
        </div>
    )
}

export default Home
