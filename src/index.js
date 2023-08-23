import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.scss';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/root';
import store from './store';
import { IKContext } from 'imagekitio-react';
import config from './config.json'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <IKContext
          publicKey={config.publicKey}
          urlEndpoint={config.urlEndpoint}
          transformationPosition="path"
          authenticationEndpoint={config.authenticateEndpoint}
          privateKey={config.privateKey}
      >
        <RouterProvider router={router}/>
      </IKContext>
  </Provider>
);