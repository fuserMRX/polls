import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.css';
import store from './store';

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