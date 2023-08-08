import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import middleware from './middleware';
import reducer from './reducers';
import { LoadingBar } from "react-redux-loading-bar";

import App from './components/App';
import './index.css';

import { createStore } from "redux";
const store = createStore(reducer, middleware);


function ColorfulBorder() {
  return (
    <>
      <ul className='border-container'>
        <li className='border-item' style={{ background: 'var(--red)' }} />
        <li className='border-item' style={{ background: 'var(--blue)' }} />
        <li className='border-item' style={{ background: 'var(--pink)' }} />
        <li className='border-item' style={{ background: 'var(--yellow)' }} />
        <li className='border-item' style={{ background: 'var(--aqua)' }} />
      </ul>
      <LoadingBar />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorfulBorder />
      <App />
    </Provider>
  </React.StrictMode>
);