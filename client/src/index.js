import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';


axios.interceptors.request.use(
  (req) => {

    req.headers['Authorization'] = localStorage.getItem('token');
     return req;
  },
  (err) => {
     return Promise.reject(err);
  }
);

ReactDOM.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


