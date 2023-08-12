import React from 'react';
import ReactDOM from 'react-dom/client';
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
      }
    ]
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
