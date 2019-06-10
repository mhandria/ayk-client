import React, { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import { PurpleYellow } from '../assets/theme';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import MediaTopPage from './MediaTopPage';
import MediaDetailPage from './MediaDetailPage';

function App() {
  return (
    <ThemeProvider theme={PurpleYellow}>
      <HashRouter basename="/">
        <Header />
        <Suspense fallback={<LinearProgress style={{width: '100vw'}}/>}>
          <Switch>
            <Redirect exact from="/" to="/anime" />
            <Route 
              path="/anime"
              exact
              render={(props) => <MediaTopPage {...props} media={'anime'} />}/>
            <Route 
              path="/manga"
              exact
              render={(props) => <MediaTopPage {...props} media={'manga'} />}/>
            <Route
              path="/:media/:filter/:id"
              exact
              component={MediaDetailPage} />
          </Switch>
        </Suspense>
      </HashRouter>  
    </ThemeProvider>
  );
}

export default App;
