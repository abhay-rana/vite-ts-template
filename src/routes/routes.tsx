import React from 'react';
import { Route, Router, Switch } from 'wouter';

import HomeScreen from '~/screens/home-screen';

const ButtonScreen = React.lazy(
    () => import('~/screens/component-test/button-screen')
);

const RouteNotFound = React.lazy(() => import('~/screens/404'));

const Routes: React.FC = () => {
    return (
        <>
            <Router>
                <React.Suspense fallback={<h1>Loading Routes...</h1>}>
                    <Switch>
                        <Route path="/" component={HomeScreen} />
                        <Route path="/button" component={ButtonScreen} />
                        <Route component={RouteNotFound} />
                    </Switch>
                </React.Suspense>
            </Router>
        </>
    );
};

export default Routes;
