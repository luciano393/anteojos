import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './styles/index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Root from './routes/root';
import Main from './pages/Main';
import AnteojosSol from './pages/AnteojosSol';
import Kids from './pages/Kids';
import Politica from './pages/Politica';
import Contacto from './pages/Contacto';
import AnteojosRecetados from './pages/AnteojosRecetados';
import Login from './autentication/Login';
import Register from './autentication/Register';

import store from './store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />
      },
      {
        path: "/anteojosdesol",
        element: <AnteojosSol />,
        errorElement: <ErrorPage />
      },
      {
        path: "/anteojosrecetados",
        element: <AnteojosRecetados />,
        errorElement: <ErrorPage />
      },
      {
        path: "/kids",
        element: <Kids />,
        errorElement: <ErrorPage />
      },
      {
        path: "/politica",
        element: <Politica />,
        errorElement: <ErrorPage />
      },
      {
        path: "/contacto",
        element: <Contacto />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorPage />
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);