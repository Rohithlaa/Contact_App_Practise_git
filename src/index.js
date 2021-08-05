import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { createStore } from 'redux';
import ContactReducer from './redux/Reducer/ContactReducer';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(ContactReducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router >
  </Provider>
 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

