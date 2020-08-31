import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { FirstComponent } from '../FirstComponent'


export default function Routing() {
    return (
        <Router>
            <div>
                <Suspense fallback={<h1>LOADING!</h1>}>
                    <Switch>
                        <Route exact path="/home" component={FirstComponent} />
                        <Route exact path="/tables" component={FirstComponent} />
                        <Route component={FirstComponent} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}