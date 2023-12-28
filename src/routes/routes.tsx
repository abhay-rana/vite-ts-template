import React from 'react';
import { Route, Router, Switch } from 'wouter';
import PrivateRoute from '~/routes/private-routes';
import FullLoaderScreen from '~/screens/component-test/full-loader.screen';
import TabScreen from '~/screens/component-test/tabs-screen';

import HomeScreen from '~/screens/home-screen';
import LoginScreen from '~/screens/login-screen';
import SecureRouteOne from '~/screens/secure-route-one';

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
                        <Route path="/tabs" component={TabScreen} />
                        <Route
                            path="/full-loader"
                            component={FullLoaderScreen}
                        />
                        <PrivateRoute
                            path="/secure1"
                            component={SecureRouteOne}
                        />
                        <Route path="/login" component={LoginScreen} />
                        <Route component={RouteNotFound} />
                    </Switch>
                </React.Suspense>
            </Router>
        </>
    );
};

export default Routes;
