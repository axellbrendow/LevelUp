import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Switch, Route} from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Error404Page from "./pages/Error404Page";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path={"/"} exact={true} component={Footer}/>
            <Route path={"/banner"} exact={true} component={Banner}/>
            <Route path={"*"} component={Error404Page}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
