import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route path='dashboard' element={<Dashboard/>} />
        <Route index  element={<Dashboard/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App