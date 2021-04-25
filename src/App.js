import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import LandingLayoutRoutes from './routes/LandingLayoutRoutes';
import DashboardLayoutRoutes from './routes/DashboardLayoutRoutes';

import { HomePage } from './components/views/HomePage/HomePage';
import { Dashboard } from './components/views/Dashboard/Dashboard';
import { Explore } from './components/views/Explore/Explore';
import { Discover } from './components/views/Discover/Discover';
import { PlanetPage } from './components/views/PlanetPage/PlanetPage';
import { Settings } from './components/views/Settings/Settings';
import { Cart } from './components/views/Cart/Cart';
import { NotFound } from './components/views/NotFound/NotFound';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <LandingLayoutRoutes exact path="/" component={HomePage} />
          <DashboardLayoutRoutes
            exact
            path="/dashboard"
            component={Dashboard}
          />
          <DashboardLayoutRoutes exact path="/explore" component={Explore} />
          <DashboardLayoutRoutes exact path="/discover" component={Discover} />
          <DashboardLayoutRoutes
            exact
            path="/planet/:id"
            component={PlanetPage}
          />
          <DashboardLayoutRoutes exact path="/settings" component={Settings} />
          <DashboardLayoutRoutes exact path="/cart" component={Cart} />
          <DashboardLayoutRoutes exact path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
