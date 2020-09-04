import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'
import { CreateRecipeView } from '../view/CreateRecipeView'
import { SignInView } from '../view/SignInView'


export default function Routing(props: any) {
    return (
        <Router>
            {props.children}
            <Suspense fallback={<h1>LOADING!</h1>}>
                <Switch>
                    <Route exact path="/recipe/:id" component={RecipeView} />
                    <Route exact path="/create" component={CreateRecipeView} />
                    <Route exact path="/signin" component={SignInView} />
                    <Route component={HomeView} />
                </Switch>
            </Suspense>
        </Router>
    );
}