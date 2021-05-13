import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// ==========
// Layouts
// ==========
import LandingLayoutRoutes from './routes/LandingLayoutRoutes';
import DashboardLayoutRoutes from './routes/DashboardLayoutRoutes';

// ==========
// Views
// ==========
const HomePage = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/HomePage/HomePage')
);
const Dashboard = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/Dashboard/Dashboard')
);
const Explore = lazy(() =>
  import(
    /* webpackPrefetch: true */ './components/views/Explore/ExploreContainer'
  )
);
const Discover = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/Discover/Discover')
);
const PlanetPage = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/PlanetPage/PlanetPage')
);
const Settings = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/Settings/Settings')
);
const Cart = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/Cart/Cart')
);
const NotFound = lazy(() =>
  import(/* webpackPrefetch: true */ './components/views/NotFound/NotFound')
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading Page...</h2>}>
          <Switch>
            <LandingLayoutRoutes exact path="/" component={HomePage} />
            <DashboardLayoutRoutes
              exact
              path="/dashboard"
              component={Dashboard}
            />
            <DashboardLayoutRoutes exact path="/explore" component={Explore} />
            <DashboardLayoutRoutes
              exact
              path="/discover"
              component={Discover}
            />
            <DashboardLayoutRoutes
              exact
              path="/planet/:id"
              component={PlanetPage}
            />
            <DashboardLayoutRoutes
              exact
              path="/settings"
              component={Settings}
            />
            <DashboardLayoutRoutes exact path="/cart" component={Cart} />
            <DashboardLayoutRoutes exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
