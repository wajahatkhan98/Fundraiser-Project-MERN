import React from 'react';
import { Route } from 'react-router-dom';

const ProctedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        //     if (!auth)
        //       <Redirect to={{ path: '/login', state: { from: props.location } }} />;
        //   }}
        // />
      }}
    />
  );
};

export default ProctedRoute;
