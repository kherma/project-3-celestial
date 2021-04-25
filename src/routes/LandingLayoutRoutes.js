import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { LandingLayout } from '../components/layout/LandingLayout/LandingLayout';

const LandingLayoutRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <LandingLayout>
          <Component {...props} />
        </LandingLayout>
      )}
    />
  );
};

LandingLayoutRoutes.propTypes = {
  component: PropTypes.func,
};

export default LandingLayoutRoutes;
