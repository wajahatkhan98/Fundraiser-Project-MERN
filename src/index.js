import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/fontawesome/css/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from 'react-reveal/globals';
import { Provider } from 'react-redux';
import store from './redux/store';

config({ ssrFadeout: true });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
