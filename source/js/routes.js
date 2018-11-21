import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from 'views/App';
import Dashboard from 'views/Dashboard';
import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
    DASHBOARD: publicPath,
};

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path={ routeCodes.DASHBOARD } component={ Dashboard } />
                        <Route component={ NotFound } />
                    </Switch>
                </App>
            </Router>
        );
    }
}
