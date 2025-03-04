import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import UserDetail from './pages/UserDetail'
import NotFound from "./pages/NotFound"
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/:id' element={<UserDetail />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App
