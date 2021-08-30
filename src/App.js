import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Home.jsx";
import Skills from "./Skills";
import Profiles from "./Profiles";
import Projects from './Projects';
import Introduction from './Introduction';
import Contact from './Contact';
import Resume from './Resume.jsx';
import Certification from './Certification.jsx';
import C2 from './C2.jsx';
import C1 from './C1.jsx';
import Achievement from './Achievement.jsx';



function App() {
  return (
    <>
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/home" exact component={Home}></Route>
    <Route path="/intro" exact component={Introduction}></Route>
    <Route path="/skills" exact component={Skills}></Route>
    <Route path="/profile" exact component={Profiles}></Route>
    <Route path="/projects" exact component={Projects}></Route>
    <Route path="/contact" exact component={Contact}></Route>
    <Route path="/cert" exact component={Certification}></Route>
    <Route path="/resume" exact component={Resume}></Route>
    <Route path="/achievement" exact component={Achievement}></Route>
    <Route path="/c3" exact component={C2}></Route>
    <Route path="/c2" exact component={C1}></Route>
    </Switch>
   </>
  )
}

export default App;
