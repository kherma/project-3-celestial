import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DashboardLayout from '../components/layout/DashboardLayout/DashboardLayout';

const DashboardLayoutRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

DashboardLayoutRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default DashboardLayoutRoutes;
