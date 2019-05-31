import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../src/components/Header';
import { ThemeProvider } from '@material-ui/styles';
import { PurpleYellow } from '../src/theme';


storiesOf('Header', module)
    .add('render Header', () => (
        <ThemeProvider theme={PurpleYellow}>
            <Header />
        </ThemeProvider>
    ));