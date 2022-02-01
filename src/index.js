import React from 'react';
import ReactDOM from 'react-dom';
// import App from './container/App';
import { AppRouter } from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

