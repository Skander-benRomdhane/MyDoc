import React, { Component } from 'react';

import Profile from './Profile.jsx'
import Messages from "./Messages.jsx";
import Appointments from "./Appointments.jsx";
import { BrowserRouter as Router ,Switch,Route , Link } from "react-router-dom"
class NavBar extends Component {
    render() {
        return (
            
                 <div>
     <Router>
     <div>
     <nav>
     <ul>
       <li><Link to="/" > Profile </Link></li>
       <li><Link to="/message"> my Messages</Link></li>
       <li><Link to="/appointment"> my Appointments</Link></li>
    </ul>
     </nav>
     <Switch>
          <Route path="/message">
            <Messages />
          </Route>
          <Route path="/appointment">
            <Appointments />
          </Route>
          <Route path="/">
            <Profile/>
          </Route>
        </Switch>
     </div>
   </Router>
   </div>
  ) 
    }
}

export default NavBar;