import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';
import AnteojosSol from '../pages/AnteojosSol';
import AnteojosRecetados from '../pages/AnteojosRecetados';
import LentesContacto from '../pages/LentesContacto';
import Kids from '../pages/Kids';
import Politica from '../pages/Politica';
import Contacto from '../pages/Contacto';
import Login from '../autentication/Login';
import Register from '../autentication/Register';
import Profile from '../components/Profile';
import BackOffice from '../pages/BackOffice';
import Inicio from '../pages/Inicio';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicio />,
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
        path: "/lentesdecontacto",
        element: <LentesContacto />,
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
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/backoffice",
    element: <BackOffice />,
    errorElement: <ErrorPage />
  }
])

