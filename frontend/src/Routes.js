import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing"
import Login from "./Login"
import Register from './Register';


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}
