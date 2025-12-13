import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route index  element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App