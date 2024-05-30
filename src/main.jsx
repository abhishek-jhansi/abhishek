import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Layout from './Layout.jsx'
import Services from './component/services/Services.jsx'
import Portfolio from './component/portfolio/Portfolio.jsx'
import Contact from './component/Contact/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='service' element={<Services/>} />
      <Route path='portfolio' element={<Portfolio/>} />
      <Route path='contact' element={<Contact/>} />

    </Route>

  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
