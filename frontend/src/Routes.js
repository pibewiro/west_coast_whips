import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Landing from "./Landing"

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
            </Switch>
        </Router>
    )
}
