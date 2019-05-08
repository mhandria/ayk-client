import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PinkBlue, PurpleYellow } from '../theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

import AnimeTVList from './pages/AnimeTVList';
import MangaJpList from './pages/MangaJPList';
import FilterBar from './components/FilterBar';
import MomentUtils from '@date-io/moment';

function App() {
  return (
    <ThemeProvider theme={PurpleYellow}>
      <BrowserRouter basename="/">
        <Header />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <FilterBar />
          </MuiPickersUtilsProvider>
        <Switch>
          <Redirect exact from="/" to="/anime" />
          <Route path="/anime" component={AnimeTVList} />
          <Route path="/manga" component={MangaJpList} />
        </Switch>
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
