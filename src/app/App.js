import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PurpleYellow, PinkBlue } from '../theme';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <ThemeProvider theme={PinkBlue}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>  
    </ThemeProvider>
  );
}

export default App;
