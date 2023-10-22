import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainLayout from './layout/MainLayout';
import store from './store/store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainLayout>
        <App />
      </MainLayout>
    </Provider>
  </React.StrictMode>
);
