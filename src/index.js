import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About'
import Contact from './pages/Contact';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Dropdown from './pages/Dropdown';


const router =createBrowserRouter([
  {
path: "/",
element: <App />,

children: [
  {
path: "/",
element: <HomePage />
},
{
  path: "/about",
  element: <About />
  },
  {
    path: "/services",
    element: <Services />
    },
    
      {
        path: "/portfolio",
        element: <Portfolio />
        },
        {
          path: "/team",
          element: <Team />
          },
          {
            path: "/dropDown",
            element: <Dropdown />
            },
          {
            path: "/contact",
            element: <Contact />
            },
]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


