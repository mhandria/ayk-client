import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#3C1A5B' },
    secondary: { main: '#FFF748', contrastText: '#666600' }
  },
  typography: {
    fontFamily: ['"Asap"', 'san-serif']
  },
  props: {
    logo: {
      background: '#3C1A5B',
      color: '#FFF748'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
