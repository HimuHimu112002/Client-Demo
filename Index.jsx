import React from 'react'
import Rootcomponents from './src/components/Rootcomponents';
import Home from './src/pages/Home'
import MvpType from './src/pages/MVP/mvpType';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootcomponents/>}>
      <Route index element={<Home></Home>}></Route>
      <Route path='/mvp-type' element={<MvpType></MvpType>}></Route>
    </Route>
  )
)
const Index = () => {
  return (
    <RouterProvider router={router} /> 
  )
}

export default Index