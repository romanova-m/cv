import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from "./components/Home";
import {storeFactory} from "./reducers";
import { Provider } from 'react-redux';

const initialState = {
  theme: {
    dark: true,
    lang: "ru"
  }
}
export const store = storeFactory(initialState)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"/>
      <link rel="stylesheet" href="../public/stylesheets/App.css"/>
      <Home/>
    </Provider>,
    document.getElementById('root')
  )
};
store.subscribe(render);
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
