import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// tạo Store và gọi reducers vào
import { createStore } from 'redux';
import myReducers from './reducers/index';
import { Provider } from 'react-redux';
const store = createStore(myReducers);
// muốn kết nối store vs các view (component) phải thông qua thằng provider 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
