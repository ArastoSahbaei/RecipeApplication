import React, { Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomeView } from '../view/HomeView'
import { RecipeView } from '../view/RecipeView'
import { CreateRecipeView } from '../view/CreateRecipeView'
import { SignInView } from '../view/SignInView'
import { UserRecipesView } from '../view/UserRecipesView'
import { UserSettingsView } from '../view/UserSettingsView'

export default function Routing(props: any) {
    return (
        <Router>
            {props.children}
            <Suspense fallback={<h1>LOADING!</h1>}>
                <Switch>
                    <Route exact path="/recipe/:id" component={RecipeView} />
                    <Route exact path="/create" component={CreateRecipeView} />
                    <Route exact path="/signin" component={SignInView} />
                    <Route exact path="/recipes" component={UserRecipesView} />
                    <Route exact path="/settings" component={UserSettingsView} />
                    <Route component={HomeView} />
                </Switch>
            </Suspense>
        </Router>
    );
}