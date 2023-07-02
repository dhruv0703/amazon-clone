import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './StateProvider';
import reducer from './components/Reducer/reducer';
 import{ initialState } from "./components/Reducer/reducer";
// import * as serviceWorker from 
ReactDOM.render(
// root.render(
  <React.StrictMode>
  <StateProvider intialState={initialState} reducer={reducer}>
  <App />
  </StateProvider>
   
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
