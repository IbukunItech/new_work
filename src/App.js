import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {DommyHome} from "./TestComp/DommyHome";
import HeaderNav from './TestComp/HeaderNav'
import NewProject from './TestComp/NewProject';
import GameScreen from "./component/SimpleGame/GameScreen";
import HomeScreen from "./Mywork/HomeScreen";
import github from "./component/github/github"
const App = () => {
    return (
        <Router>
            <HeaderNav/>
            <Switch>
                <Route path="/" exact component={DommyHome} />
                <Route path="/newProject" exact component={NewProject} />
                <Route path="/gameScreen" exact component={GameScreen} />
                <Route path="/homeScreen" exact component={HomeScreen} />
                <Route path="/github" exact component={github} />
            </Switch>
        </Router>
    )
}

export default App

