import React from 'react';
import { DefaultParams, Route, RouteComponentProps } from 'wouter';
import { useAppLocation } from '~/components/library/routing';
import { useAppSelector } from '~/hooks/redux-hooks';

export interface IPrivateRoute {
    component: React.ComponentType<RouteComponentProps<DefaultParams>>;
    path: string;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
    component: Component,
    path,
}) => {
    const [_, setLocation] = useAppLocation();
    const store = useAppSelector((state) => ({
        is_auth: state.counter_store.counter,
    }));

    if (!store.is_auth) {
        setLocation('/login');
    }
    return (
        <>
            <Route path={path} component={Component} />
        </>
    );
};

export default PrivateRoute;
