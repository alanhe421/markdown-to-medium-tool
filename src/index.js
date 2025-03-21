import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import './index.css';
import { store } from './state.js';

const theme = createTheme(); // 你可以在这里自定义主题

const WrappedApp = props => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<WrappedApp />, document.querySelector('#root'));
