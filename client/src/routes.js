import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import New from './pages/New'

export default function Routes(){
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}
