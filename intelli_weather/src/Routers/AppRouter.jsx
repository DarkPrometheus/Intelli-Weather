import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Welcome from './../components/Welcome/Welcome';
import { Sensores } from './../components/Sensores/Sensores';
import NavBar from '../components/NavBar/NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/Sensores" component={Sensores} />
                <Route exact path="/" component={Welcome} />
            </Switch>
        </Router>
    )
}
