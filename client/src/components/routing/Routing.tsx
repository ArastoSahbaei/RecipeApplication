import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { FirstComponent } from '../FirstComponent'
import { RecipeView } from '../../view/RecipeView'


export default function Routing(props: any) {
    return (
        <Router>
            {props.children}
            <div>
                <Suspense fallback={<h1>LOADING!</h1>}>
                    <Switch>
                        <Route exact path="/home" component={FirstComponent} />
                        <Route exact path="/recipe/:id" component={RecipeView} />
                        <Route component={FirstComponent} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    );
}