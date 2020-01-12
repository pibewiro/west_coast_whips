import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing"
import Login from "./Login"
import Register from './Register';
import Cars from './Cars';
import Contacts from './Contacts';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/cars" component={Cars} />
                <Route exact path="/contacts" component={Contacts} />
            </Switch>
        </Router>
    )
}
