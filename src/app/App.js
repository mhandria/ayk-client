import React, { Suspense } from 'react';
import { LinearProgress } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PinkBlue, PurpleYellow } from '../theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// import AnimeTVList from './pages/AnimeTVList';
import MangaJpList from './pages/MangaJPList';
import FilterBar from './components/FilterBar';
import MomentUtils from '@date-io/moment';


const AnimeTVListLazy = React.lazy(() => import('./pages/AnimeTVList'));
function App() {
  return (
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
            <Route path="/manga" component={MangaJpList} />
          </Switch>
        </Suspense>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
