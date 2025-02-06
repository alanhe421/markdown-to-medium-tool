import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app.js';
import './index.css';
import { store } from './state.js';

const WrappedApp = props => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<WrappedApp />, document.querySelector('#root'));
