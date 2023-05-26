import React, { FC } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Configurations, LandingPages, Campanha, Inicio, Revenue } from './pages/Overview';
import Users from './pages/Users';

const App: FC = () => {
    return (
        <Router>
            <Sidebar />
            <div className="app-content">
                <Switch>
                    <Route path="/inicio" component={Inicio} exact></Route>
                    <Route path="/inicio/users" component={Users} exact></Route>
                    <Route path="/inicio/revenue" component={Revenue} exact></Route>
                    <Route path="/campanha" component={Campanha} exact></Route>
                    <Route path="/landingpages" component={LandingPages} exact></Route>
                    <Route path="/configurations" component={Configurations} exact></Route>
                </Switch>
            </div>
        </Router>
    );
};


export default App;
