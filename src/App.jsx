import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DestinationPage from './pages/DestinationPage'

function App() {

  return (
    <BrowserRouter>
        <Routes>

          <Route path='/' element={ <HomePage/> } />
          <Route path='/login' element={ <LoginPage/> } />
          <Route path='/destination' element={<DestinationPage />} />
         
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
