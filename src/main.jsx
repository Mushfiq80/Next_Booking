import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Flight from './components/Flight/Flight';
import Hotel from './components/Hotel/Hotel';
import Main from './layout/Main';
import HotelCard from './components/ShowResult/HotelCard/HotelCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/flight',
        element: <Flight></Flight>
      },
      {
        path: '/hotel',
        element: <Hotel></Hotel>
      },
      {
        path: '/show-hotel-card',
        element: <HotelCard></HotelCard>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
