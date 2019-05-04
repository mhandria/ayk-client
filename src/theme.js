import React from 'react';
import { createMuiTheme } from '@material-ui/core';

export const PurpleYellow = createMuiTheme({
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
});
