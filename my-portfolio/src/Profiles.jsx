import React from 'react'
import { Card, CardGroup, Carousel } from 'react-bootstrap'
import gfg from './pics/gfg1.png'
import l from './pics/leet.png'
import bss from './pics/bss.png'
import li from './pics/link.png'
import git from './pics/git.png'
import Navv from './Navv'


function Profiles() {
    return (
        <>
        <Navv></Navv>
        <div className="container">
        <br></br>
        <Card className="text-center border-0 h1 bg-transparent tech">
        <Card.Body>
           MY PROFILES 
        </Card.Body>
        </Card>
        <br></br>
        <br></br>
            <Card className=" text-center h1 bg-transparent border-0 tech">
                <center><Card.Img variant="top" className="col-md-4" height="300" width="120" src={git} /> </center>
            <Card.Body>
                <Card.Text>
                <a href="https://github.com/Staffy-1010" style={{color:'black'}}>GitHub</a>
                </Card.Text>
            </Card.Body>
            </Card>
            <br></br>      
            <Card className=" bg-transparent text-center h1 border-0 tech">
            <center><Card.Img variant="top" className="col-md-4" height="300" src={li} /></center>
            <Card.Body>
            <Card.Text>
                <a href="https://www.linkedin.com/in/staffy-15b77a1b5" style={{color:'black'}}>LinkedIn</a>
            </Card.Text>
            </Card.Body>
            </Card>
            <Card className=" text-center h1 bg-transparent border-0 tech">
                <center><Card.Img variant="top" className="col-md-4" height="300" style={{filter:'blur(0px)'}} src={gfg} /></center>
                <Card.Body>
                <Card.Text>
                    <a href="https://auth.geeksforgeeks.org/user/staffy7508/practice/" style={{color:'black'}}>GeeksForGeeks</a>
                </Card.Text>
                </Card.Body>
            </Card><br></br>
            <Card className=" bg-transparent text-center h1 border-0 tech">
                <center><Card.Img variant="top" className="col-md-4" height="300" src={l} /></center>
                <Card.Body>
                <Card.Text>
                    <a href="https://leetcode.com/staffy_10/" style={{color:'black'}}>LeetCode</a>
                </Card.Text>
                </Card.Body>
            </Card><br></br>
             <Card className=" bg-transparent text-center h1 border-0 tech">
                <center><Card.Img variant="top" className="col-md-4" height="300" src={bss} /></center>
                <Card.Body>
                    <Card.Text className="text-dark">
                        <a href="https://binarysearch.com/@/classicmess" style={{color:'black'}}>binarysearch.com</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}

export default Profiles
