import {Redirect, Route, Switch} from "react-router-dom";

import './App.css';
import {MoviesPage, TestPage} from "./containers";
import {CVmy} from "./components/CV/NewCV/CVmy";

function App() {
    return (
        <div>
            <Switch>
                <Redirect exact from="/" to="/movies?page=1"/>

                <Route path="/movies" component={MoviesPage}/>
                <Route path="/myCV" component={CVmy}/>
                <Route path="/test" component={TestPage}/>
            </Switch>
        </div>
    );
}

export default App;