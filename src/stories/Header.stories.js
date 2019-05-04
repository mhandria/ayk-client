import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '../app/components/Header';
import { ThemeProvider } from '@material-ui/styles';
import { PurpleYellow } from '../theme';


storiesOf('Header', module)
    .add('render Header', () => (
        <ThemeProvider theme={PurpleYellow}>
            <Header />
        </ThemeProvider>
    ));