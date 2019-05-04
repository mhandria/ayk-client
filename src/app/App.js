import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header';
import { PurpleYellow } from '../theme';



function App() {
  return (
    <ThemeProvider theme={PurpleYellow}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
