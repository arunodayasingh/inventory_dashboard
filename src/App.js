import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import "./App.css"
import AppBaar from './components/appbar'
import Dashboard from './components/Inventory_dashboard/Dashboard'
import Sidebar from './components/sidebar/sidebar'

const App = () => {
  return (
    <div xs={12} >
    <div xs={12}>
    <AppBaar/>
    <Sidebar/>
    </div>
    <BrowserRouter>
    <div >
    <Routes>
      <Route extact path="/"  element={<Dashboard/>} /> 
    </Routes>
    </div>
      
    </BrowserRouter>
    </div>
  )
}

export default App;