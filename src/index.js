import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './Store';
import App from './App';


// Crea un root utilizando createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));


// Renderiza el componente en el root
root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>
);