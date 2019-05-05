import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PinkBlue } from '../theme';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import AnimeTVList from './pages/AnimeTVList';
import MangaJpList from './pages/MangaJPList';


function App() {
  return (
    <ThemeProvider theme={PinkBlue}>
      <BrowserRouter basename="/">
        <Header />
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
