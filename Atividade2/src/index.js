import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Switch, Route} from "react-router-dom";
import Error404Page from "./pages/Error404Page";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import 'font-awesome/css/font-awesome.min.css';
import 'bulma/css/bulma.min.css';
import './animate.css';
import ProductsPage from './pages/ProductsPage';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path={"/"} exact={true} component={HomePage}/>
            <Route path={"/products"} exact={true} component={ProductsPage}/>
            <Route path={"/products/:id"} exact={true} component={ProductPage}/>
            <Route path={"*"} component={Error404Page}/>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
