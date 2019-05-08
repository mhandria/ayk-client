import React from 'react';
import { createMuiTheme } from '@material-ui/core';

export const PurpleYellow = createMuiTheme({
    palette: {
      primary: { main: '#3C1A5B' },
      secondary: { main: '#FFF748', contrastText: '#666600' }
    },
    typography: {
      fontFamily: ['"Rubik"', 'san-serif']
    },
    props: {
      logo: {
        background: '#3C1A5B',
        color: '#FFF748'
      }
    },
    overrides: {
      MuiPickersToolbar: {
        toolbar: {
          height: '15px'
        },
      },
    }
});


export const PinkBlue = createMuiTheme({
    palette: {
        primary: { main: '#2F3C7E'},
    },
    typography: {
        fontFamily: ['"Rubik"', 'san-serif']
    },
    props: {
        logo: {
            background: '#2F3C7E',
            color: '#FBEAEB'
        }
    }
})