import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Index from '../Index';
import './media.css'
// import { createBrowserRouter,RouterProvider,} from "react-router-dom";
// import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
// import Home from './pages/Home'
// import MvpType from './pages/MVP/MvpType';
// import Rootcomponents from './components/Rootcomponents';

// const router = createBrowserRouter([
//   {
//     path: "/home",
//     element: <Home></Home>,
//   },
//   {
//     path: "/",
//     element: <Rootcomponents></Rootcomponents>,
//   },
//   {
//     path: "mvp-type",
//     element: <MvpType></MvpType>,
//   },

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
)
