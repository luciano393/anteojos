import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.scss';
import { RouterProvider } from "react-router-dom";
import { router } from './routes/root';
import store from './store';
import { IKContext } from 'imagekitio-react';

const urlEndpoint="https://ik.imagekit.io/0lswtnkkmck/"
const publicKey="public_lGafPttRIS/xR8KMgg+uSkT1IGw="

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <IKContext
          urlEndpoint={urlEndpoint}
          publicKey={publicKey}
          transformationPosition="path"
      >
        <RouterProvider router={router}/>
      </IKContext>
  </Provider>
);