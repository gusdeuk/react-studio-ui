import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './ui/styles/scss-mui/muiThemeConfig';
import './ui/styles/global-styles.scss';
import './App.scss';


import {Sandbox} from "./ui/pages/Sandbox/Sandbox";
import {About} from "./ui/pages/About/About";
import {Welcome} from "./ui/pages/Welcome/Welcome";


const routes = {
    home: '/',
    sandbox: '/sandbox',
    about: '/about',
}

function App() {
    return (
    <div>

        {/*// theme provider for material UI base stuff*/}
        <ThemeProvider theme={theme}>
            {/* CssBaseline for material UI base stuff*/}
            <CssBaseline/>


            <Router>
                <div>

                    <Menu />
                    <Switch>
                        <Route path={routes.sandbox}>
                            <Sandbox />
                        </Route>
                        <Route path={routes.about}>
                            <About />
                        </Route>
                        <Route path={routes.home}>
                            <Welcome />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>

    </div>
  );
}

function Menu() {
    return (
        <div className="nav-menu-temp">

            <div className="item">
                <NavLink exact to={routes.home} activeClassName="selected">Welcome</NavLink>
            </div>
            <div className="item">
                <NavLink exact to={routes.sandbox} activeClassName="selected">Sandbox</NavLink>
            </div>
            <div className="item">
                <NavLink exact to={routes.about} activeClassName="selected">About</NavLink>
            </div>
        </div>
    )
}

export default App;