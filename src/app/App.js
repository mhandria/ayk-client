import React, { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PinkBlue, PurpleYellow } from '../theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import FilterBar from './components/FilterBar';
import MomentUtils from '@date-io/moment';

const store = createStore(rootReducer);
const AnimeTVListLazy = React.lazy(() => import('./components/AnimeTVList'));
function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={PurpleYellow}>
        <BrowserRouter basename="/">
          <Header />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <FilterBar />
            </MuiPickersUtilsProvider>
          <Suspense fallback={<LinearProgress style={{width: '100vw'}}/>}>
            <Switch>
              <Redirect exact from="/" to="/anime" />
              <Route path="/anime" component={AnimeTVListLazy} />
            </Switch>
          </Suspense>
        </BrowserRouter>  
      </ThemeProvider>
    </Provider>
  );
}

export default App;
