import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { dark } from '@material-ui/core/styles/createPalette';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
      },
    palette: dark
    
});



ReactDOM.render(
    <React.Fragment>
    <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </MuiThemeProvider>
    </React.Fragment>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
