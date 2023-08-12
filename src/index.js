import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';
import AnteojosSol from './pages/AnteojosSol';
import AnteojosResetados from './pages/AnteojosResetados';
import Kids from './pages/Kids';
import Politica from './pages/Politica';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/anteojosdesol",
    element: <AnteojosSol />,
    errorElement: <ErrorPage />
  },
  {
    path: "/anteojosresetados",
    element: <AnteojosResetados />,
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
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router}/>
    <Footer />
  </React.StrictMode>
);
