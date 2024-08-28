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
import Products from './Pages/Products.jsx';
import VarietyPage from './Pages/VarietyPage.jsx';
import Verify from './Pages/Verify.jsx';
import Detail from './Pages/Detail.jsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Home />}>
      </Route>
    <Route path="/home" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/products/:id" element={<Detail />}/>
    <Route path="/Categories" element={<VarietyPage />}/>

      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/register" element={<Register />} />
       </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>,
);
