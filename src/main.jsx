import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}>
      </Route>
    <Route path="/home" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<About />}/>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
