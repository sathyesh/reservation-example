import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

/* 
React.StrictMode is commented because of issues in Material UI library
Please refer https://github.com/mui-org/material-ui/issues/13394 
TOD0: Once the issue is solved, we can uncomment the StrictMode
To know more about strict mode: 
https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage
*/
ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
