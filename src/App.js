import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';

import { HomePage } from './components/views/HomePage/HomePage';
import { CreateProfile } from './components/views/CreateProfile/CreateProfile';
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
        <MainLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create-profile" component={CreateProfile} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/planet/:id" component={PlanetPage} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
