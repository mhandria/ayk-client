import React, { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header';
import { PurpleYellow } from '../assets/theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MediaTopPage from './MediaTopPage';

function App() {
  return (
    <ThemeProvider theme={PurpleYellow}>
      <BrowserRouter basename="/">
        <Header />
        <Suspense fallback={<LinearProgress style={{width: '100vw'}}/>}>
          <Switch>
            <Redirect exact from="/" to="/anime" />
            <Route 
              path="/anime"
              render={(props) => <MediaTopPage {...props} media={'anime'} />}/>
            <Route 
              path="/manga"
              render={(props) => <MediaTopPage {...props} media={'manga'} />}/>
          </Switch>
        </Suspense>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
