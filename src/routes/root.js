import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import Main from '../pages/Main';
import Category from '../pages/Category';
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
        path: "/category-1",
        element: <Category category="category-1"/>,
        errorElement: <ErrorPage />
      },
      {
        path: "/category-2",
        element: <Category category="category-2"/>,
        errorElement: <ErrorPage />
      },
      {
        path: "/category-3",
        element: <Category category="category-3"/>,
        errorElement: <ErrorPage />
      },
      {
        path: "/category-4",
        element: <Category category="category-4"/>,
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

